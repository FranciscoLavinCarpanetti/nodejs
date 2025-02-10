const Product = require('../models/products.model');


const getAll = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        next(error);

    }

};


const getByPrice = async (req, res, next) => {
    const { minPrice } = req.query;
    try {
        const products = await Product.find({ price: { $gte: minPrice } }).sort({ price: -1 });
        res.json(products);
    } catch (error) {
        next(error);

    }

};

/**
 * Obtiene una lista de productos filtrados por departamento.
 * 
 * Esta función recibe un parámetro `deparment` desde la URL, lo utiliza para 
 * buscar productos en la base de datos y devuelve una lista con los productos 
 * encontrados en formato JSON.
 * 
 * @async
 * @function getByDeparment
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} req.params - Parámetros de la URL.
 * @param {string} req.params.deparment - Nombre del departamento para filtrar los productos.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función para manejar errores en Express.
 * @returns {Promise<void>} Devuelve una respuesta JSON con los productos encontrados o maneja un error.
 * @throws {Error} Si ocurre un error durante la consulta a la base de datos.
 */
const getByDepartment = async (req, res, next) => {
    const { department } = req.params;
    try {
        const products = await Product.find({ department });
        res.json(products);
    } catch (error) {
        next(error);

    }

};


const getById = async (req, res, next) => {
    const { productId } = req.params;
    try {
        const product = await Product.findById(productId);
        res.json(product);
    } catch (error) {
        next(error);

    }
};

/**
 * Crea un nuevo producto en la base de datos.
 * 
 * Esta función recibe los datos del producto desde la solicitud(`req.body`),
 * los envía al modelo `Product` para ser almacenados en la base de datos
    * y devuelve el producto recién creado como respuesta.
 * 
 * @async
        * @function createProduct
 * @param { Object } req - Objeto de solicitud de Express.
 * @param { Object } req.body - Datos del producto enviados en la solicitud.
 * @param { string } req.body.nombre - Nombre del producto.
 * @param { string } req.body.descripcion - Descripción del producto.
 * @param { number } req.body.precio - Precio del producto.
 * @param { number } req.body.stock - Cantidad disponible en inventario.
 * @param { Object } res - Objeto de respuesta de Express.
 * @param { Function } next - Función para manejar errores en Express.
 * @returns { Promise < void>} Envía una respuesta JSON con el producto recién creado o maneja un error.
 * @throws { Error } Si ocurre un error durante la creación del producto.
 */
const createProduct = async (req, res, next) => {
    try {
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        next(error);

    }

};


const updateById = async (req, res, next) => {
    const { productId } = req.params;
    try {
        const product = await Product.findByIdAndUpdate(productId, req.body, { new: true });
        res.json(product);
    }
    catch (error) {
        next(error);

    }
};


const deleteById = async (req, res, next) => {
    const { productId } = req.params;
    try {
        const product = await Product.findByIdAndDelete(productId);
        res.json(product);
    }
    catch (error) {
        next(error);

    }
};

module.exports = {
    getAll,
    getByDepartment,
    getById,
    createProduct,
    updateById,
    deleteById,
    getByPrice
};