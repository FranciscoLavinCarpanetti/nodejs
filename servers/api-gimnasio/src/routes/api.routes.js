// Gestión de las rutas de la API
// /api
const router = require('express').Router();

router.use('/clientes', require('./api/clientes.routes'));
router.use('/monitores', require('./api/monitores.routes'))
router.use('/usuarios', require('./api/usuarios.routes'))

module.exports = router;