const router = require('express').Router();

const { getAllMonitores, getMonitoresClientes } = require('../../controllers/monitores.controller');

router.get('/', getAllMonitores);
router.get('/clientes', getMonitoresClientes);

module.exports = router;