// /api/products
const router = require('express').Router();

const { getAll, create, update, deleteProduct } = require('../../controllers/products.controller');

router.get('/', getAll);
router.post('/', create);
router.put('/', update);
router.delete('/', deleteProduct);

module.exports = router;