const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    pname: {
        type: String
    },
    ptype: {
        type : String
    },
    psize: {
        type: String
    }, 
    price: {
        type: String
    }, 
    quantity: {
        type: String
    },
    image: {
        type: String
    },
    userId: {
        type: String
    }

})
let Product = mongoose.model('Product', productSchema);
module.exports = Product;
module.exports.s = productSchema;