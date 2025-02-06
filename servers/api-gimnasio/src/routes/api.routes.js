// Gestión de las rutas de la API
// /api
const router = require('express').Router();

router.use('/clientes', require('./api/clientes.routes'));
router.use('/monitores', require('./api/monitores.routes'))

module.exports = router;