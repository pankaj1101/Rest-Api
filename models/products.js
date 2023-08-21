const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    "title": {
        type: String,
        required: true
    },
    "price": {
        type: Number,
        required: [true, "provide price"]
    },
    "body": {
        type: String,
        required: true
    },
    "app": {
        type: Boolean,
        required: true
    }
});

// product must be singular...
// it will be the name of collection
module.exports = mongoose.model('Product', productSchema);