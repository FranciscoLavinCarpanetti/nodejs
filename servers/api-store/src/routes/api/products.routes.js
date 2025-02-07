const router = require('express').Router();

const { getAll, getByDeparment, getById, createProduct, updateById, deleteById, getByPrice } = require('../../controllers/products.controller');


router.get('/', getAll);
router.get('/dptm/:deparment', getByDeparment);
router.get('/:productoId', getById);

router.get('/price/:minPice', getByPrice);

router.post('/', createProduct);
router.put('/:productoId', updateById);
router.delete('/:productoId', deleteById);














module.exports = router;