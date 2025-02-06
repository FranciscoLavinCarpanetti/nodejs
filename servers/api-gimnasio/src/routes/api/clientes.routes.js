// Gestión de las rutas de la API de clientes
// /api/clientes
const router = require('express').Router();

const { getAllClientes, createCliente, updateCliente, deleteCliente, getById, getMayores } = require('../../controllers/clientes.controller');

router.get('/', getAllClientes);
router.get('/:clienteId', getById);
router.get('/edad/:minEdad', getMayores);

router.post('/', createCliente);
router.put('/:clienteId', updateCliente);
router.delete('/:clienteId', deleteCliente);

module.exports = router;