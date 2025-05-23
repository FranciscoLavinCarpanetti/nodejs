const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: String,
    description: String,
    department: String,
    price: Number,
    stock: Number,
    available: Boolean,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, {
    timestamps: true, versionKey: false
});

const Product = model('product', productSchema);
module.exports = Product;