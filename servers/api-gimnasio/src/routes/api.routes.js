// Gestión de las rutas de la API

const { checkToken } = require('../middleware/usuarios.middleware');

// /api
const router = require('express').Router();

router.use('/clientes', checkToken, require('./api/clientes.routes'));
router.use('/monitores', require('./api/monitores.routes'))
router.use('/usuarios', require('./api/usuarios.routes'))

module.exports = router;