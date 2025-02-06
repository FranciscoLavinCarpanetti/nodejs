

const Cliente = require('../models/clientes.model');

const checkClienteId = async (req, res, next) => {

    const { clienteId } = req.params;

if (isNaN(clienteId)){
    return res.status(400).json({ message: 'El id del cliente debe ser un número' });
}
 const cliente = await Cliente.selectById(clienteId); 
    if (!cliente) {
        return res.status(404).json({ message: 'El id del cliente no existe' });
    }

    next();
};

















module.exports = {checkClienteId}