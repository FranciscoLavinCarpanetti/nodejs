// /api/users
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('[API] Se recuperan los usuarios')
});

router.post('/', (req, res) => {
    res.send('[API] Se crea un usuario');
});

router.put('/', (req, res) => {
    res.send('[API] Se actualiza un usuario');
});

router.put('/admin', (req, res) => {
    res.send('[API] Se actualiza un usuario con el admin');
})

router.delete('/', (req, res) => {
    res.send('[API] Se borra un usuario');
});

module.exports = router;