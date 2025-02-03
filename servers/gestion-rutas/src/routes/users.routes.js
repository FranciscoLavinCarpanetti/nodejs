const router = require('express').Router();

router.post('/new', (req, res) => {
    res.send('Se crea un nuevo usuario');
});

module.exports = router;