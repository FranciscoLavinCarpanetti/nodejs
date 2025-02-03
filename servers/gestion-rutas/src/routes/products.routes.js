// /products
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Se recuperan todos los productos');
});

router.post('/', (req, res) => {
    res.send('Se crea un producto');
});

router.put('/', (req, res) => {
    res.send('Se actualiza un producto');
});

router.delete('/', (req, res) => {
    res.send('Se borra un producto');
});

module.exports = router;