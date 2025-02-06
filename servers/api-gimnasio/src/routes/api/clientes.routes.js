// Gestión de las rutas de la API de clientes
// /api/clientes
const router = require('express').Router();

const { getAllClientes, createCliente, updateCliente, deleteCliente, getById, getMayores, getDni } = require('../../controllers/clientes.controller');
const { checkClienteId } = require('../../middleware/clientes.middleware');

router.get('/', getAllClientes);
router.get('/:clienteId',checkClienteId, getById);
router.get('/edad/:minEdad', getMayores);
router.get('/dni/:cienteDni', getDni);

router.post('/', createCliente);
router.put('/:clienteId',checkClienteId, updateCliente);
router.delete('/:clienteId',checkClienteId, deleteCliente);

module.exports = router;