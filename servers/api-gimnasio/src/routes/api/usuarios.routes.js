
const router = require('express').Router();

const { registro, login } = require('../../controllers/usuarios.controller');



router.post('/registo', registro);
router.post('/login', login);





module.exports = router;