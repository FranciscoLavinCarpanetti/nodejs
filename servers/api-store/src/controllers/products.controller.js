const Product = require('../models/products.model');

const getAll = async (req, res, next) => {
    try {
        const products = await Product.find()
            .populate('owner', '-_id username email');
        res.json(products);
    } catch (error) {
        next(error);
    }
}

const getByDepartment = async (req, res, next) => {
    const { department } = req.params;

    try {
        const products = await Product.find({ department });
        res.json(products);
    } catch (error) {
        next(error);
    }
}

const getByPrice = async (req, res, next) => {
    const { minPrice } = req.params;

    try {
        const products = await Product.find({
            price: { $gt: minPrice }
        }).sort({ price: -1 });
        res.json(products);
    } catch (error) {
        next(error);
    }
}

const getById = async (req, res, next) => {
    const { productId } = req.params;

    try {
        const product = await Product.findById(productId)
            .populate('owner', '-_id username email');
        res.json(product);
    } catch (error) {
        next(error);
    }
}

const create = async (req, res, next) => {
    // Asigno el owner del producto
    req.body.owner = req.user._id;

    try {
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        next(error);
    }
}

const updateById = async (req, res, next) => {
    const { productId } = req.params;

    try {
        const product = await Product.findByIdAndUpdate(
            productId, req.body, { new: true }
        );
        res.json(product);
    } catch (error) {
        next(error);
    }

}

const deleteById = async (req, res, next) => {
    const { productId } = req.params;

    try {
        const product = await Product.findByIdAndDelete(productId);
        // Product.deleteOne({ _id: productId });

        res.json(product);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll, getByDepartment, getById, create, updateById, deleteById, getByPrice
}