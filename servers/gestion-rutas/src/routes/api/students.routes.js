const router = require('express').Router();

router.delete('/', (req, res) => {
    res.send('Se borra un estudiante');
});

module.exports = router;