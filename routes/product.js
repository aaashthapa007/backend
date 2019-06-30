const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: '/uploads/'});
const Product = require('../models/Product')
const router = express.Router();
const auth = require ('../middleware/Auth')


//to get value inserted in products
router.post('/product',auth,function(req,res, next){
    console.log(req.body);

    var proData = new Product({...req.body,  userId : req.user._id});
    proData.save().then(function(proData){
    res.send("Product add");
    })
    .catch(function()
    {console.log("something is wrong")})
    
    // Product.create(req.body)
    // .then((product)=> {
    //     res.statusCode = 200;
    //     res.json(product);
    // })
    // .catch((err)=> next(err));

    // // const productData = new Product({...req.body})
    // productData.save().then(function(){
    //     res.send('fine')
    // })
    // .catch(function(e){
    //     res.send(e)
    // })
})

router.put('/product/:id', function (req, res) {   //update product
    pid = req.params.id.toString();
    console.log(pid);
    console.log(req.body);
    Product.findByIdAndUpdate( pid,req.body,{new: true}, (err,product) => {
        if(err) {
            console.log("error");
        }
        console.log("updated");
        });
});

router.delete('/product/:id', function (req, res) {   //delete product
    pid = req.params.id.toString();
    console.log(pid);
    console.log(req.body);
    Product.findByIdAndDelete(pid).then(function(req,res){
        res.send('Product is deleted');
    }).catch(function(e){
        res.send(e);
    })
});

///for displaying the datas


// router.get('/product', function (req, res) {   //get data in dashboard
//     Product.find().then(function (product) {
//         res.send(product);
//     }).catch(function (e) {
//         res.send(e)
//     });
// });


router.get('/product/:id',auth, function (req, res) {   //get data in dashboard
    console.log(req.params.id)
    Product.findById(req.params.id).then(function (product) {
        console.log(product);
        res.send(product);
    }).catch(function (e) {
        res.send(e)
    });
});


// router.get('/showproduct', async function(req,res){     //to check the product of the logged in user 
//     const show = await Product.find({userId: user._id})
//     res.send(show)
// })


module.exports = router;