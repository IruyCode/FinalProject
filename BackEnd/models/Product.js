const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    descripton: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
})

// create de model
const Product = mongoose.model("product", productSchema)
// export Product module
module.exports = Product;