const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const Vendor = require('../models/vendor');
const router = express.Router();
const auth = require ('../middleware/Auth');

//to insert data into the table
    router.post('/vendor/:id',auth,function(req,res, next){
    console.log(req.body);

    var venData = new Vendor({...req.body,  userId : req.user._id});
    venData.save().then(function(venData){
    res.send("Vendor succesfully add");
    })
    .catch(function()
    {console.log("something is wrong")});
});

///to update vendor details
    router.put('/vendor/:id', function (req, res) {   
        vid = req.params.id.toString();
        console.log(vid);
        console.log(req.body);
        Vendor.findByIdAndUpdate( vid,req.body,{new: true}, (err,vendor) => {
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