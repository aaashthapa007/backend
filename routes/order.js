const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const Order = require('../models/order');
const router = express.Router();
const auth = require ('../middleware/Auth');
const Vendor = require('../models/vendor');
const Product = require('../models/Product');

//to insert data into the table
router.post('/order',auth,function(req,res, next){
    console.log(req.body);

    Vendor.findById({_id: req.body.vendorId}).then(function(vendor){
        var vendorArray = vendor;
       
      
    Product.findById({_id: req.body.productId}).then(function(product){
        var productArray = product;
        var orderData = new Order({...req.body, vendor : vendorArray, product : productArray});
        orderData.save().then(function(orderData){
        res.send("Order succesfully added");
        })
        .catch(function()
        {console.log("something is wrong")});
    });


    });
    // var orderData = new Order({...req.body,  userId : req.user._id});
    // orderData.save().then(function(orderData){
    // res.send("Order succesfully added");
    // })
    // .catch(function()
    // {console.log("something is wrong")});
});

///to update vendor details
    router.put('/order/:id', function (req, res) {   
        oid = req.params.id.toString();
        console.log(oid);
        console.log(req.body);
        Vendor.findByIdAndUpdate( oid,req.body,{new: true}, (err,vendor) => {
            if(err) {
                console.log("error");
            }
            console.log("updated");
            });
    });

    router.delete('/vendor/:id', function (req, res) {   //delete product
        vid = req.params.id.toString();
        console.log(vid);
        console.log(req.body);
        Vendor.findByIdAndDelete(vid).then(function(req,res){
            res.send('Vendor is deleted');
        }).catch(function(e){
            res.send(e);
        })
    });

    router.get('/vendor/:id',auth, function (req, res) {   //get data in dashboard
        console.log(req.params.id)
        Vendor.findById(req.params.id).then(function (vendor) {
            console.log(vendor);
            res.send(vendor);
        }).catch(function (e) {
            res.send(e)
        });
    });

    module.exports = router;