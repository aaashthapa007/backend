const mongoose = require('mongoose');
const Vendor = require('../models/vendor');
const Product = require('../models/Product')

const orderSchema = new mongoose.Schema({
    vendor: [
        Vendor.s
    ],
    product: [ 
        Product.s
    ]
    ,
    quantity: {
        type: String
    },
    price: {
        type: String
    },
   credit: {
       type: String
   },
   date: {
    type: Date
   }

})

let order = mongoose.model('Order', orderSchema);
 module.exports = order;