const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    name: String,
    description: String,
    deparment: String,
    price: Number,
    stock: Number,
    available: Boolean
}, {
    timestamps: true, versionKey: false
});







const Product = model('Product', productSchema);
module.exports = Product;