const Monitor = require('../models/monitores.model');
const Cliente = require('../models/clientes.model');

const getAllMonitores = async (req, res, next) => {
    const monitores = await Monitor.selectAll();
    res.json(monitores);
}

const getMonitoresClientes = async (req, res, next) => {
    // Recupero todos los monitores
    const monitores = await Monitor.selectAll();

    for (let monitor of monitores) {
        // Para cada monitor recupero sus clientes
        const clientes = await Cliente.selectByProfesorId(monitor.id);
        monitor.clientes = clientes;
    }

    res.json(monitores);
}

module.exports = {
    getAllMonitores, getMonitoresClientes
}