const Cliente = require('../models/clientes.model');

const getAllClientes = async (req, res, next) => {
    try {
        const result = await Cliente.selectAll();
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const getById = async (req, res, ext) => {
    const { clienteId } = req.params;

    try {
        const result = await Cliente.selectById(clienteId);
        if (!result) {
            return res.status(404).json({ message: 'El id del cliente no existe' });
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const getMayores = async (req, res, next) => {
    const { minEdad } = req.params;

    try {
        const clientes = await Cliente.selectMayores(minEdad);
        res.json(clientes);
    } catch (error) {
        next(error);
    }
}

const createCliente = async (req, res, next) => {
    try {
        const result = await Cliente.create(req.body);
        const cliente = await Cliente.selectById(result.insertId);
        res.json(cliente);
    } catch (error) {
        next(error);
    }
}

const updateCliente = async (req, res, next) => {
    const { clienteId } = req.params;

    try {
        await Cliente.updateById(clienteId, req.body);
        const cliente = await Cliente.selectById(clienteId);
        res.json(cliente);
    } catch (error) {
        next(error);
    }
}

const deleteCliente = async (req, res, next) => {
    const { clienteId } = req.params;

    try {
        const cliente = await Cliente.selectById(clienteId);
        await Cliente.deleteById(clienteId);

        res.json(cliente);
    } catch (error) {
        next(error);
    }
}

module.exports = { getAllClientes, getById, getMayores, createCliente, updateCliente, deleteCliente }