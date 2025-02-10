const router = require('express').Router();

const { register, login, profile } = require('../../controllers/users.controller');
const { checkToken } = require('../../middlewares/users.middleware');

router.get('/profile', checkToken, profile);

router.post('/register', register);
router.post('/login', login);

module.exports = router;