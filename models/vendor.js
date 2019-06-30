const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


const vendorSchema = new mongoose.Schema( {
    fullname: {
        type: String
    },
    company: {
        type: String
    },
    address: {
        type: String
    },
    phonenumber: {
        type: String
    },
   userId: {
       type: String
   }
})

let vendor = mongoose.model('Vendor', vendorSchema);
 module.exports = vendor
module.exports.s = vendorSchema
