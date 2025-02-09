const router = require('express').Router();

const { getAll, getByDepartment, getById, createProduct, updateById, deleteById, getByPrice } = require('../../controllers/products.controller');


router.get('/', getAll);
router.get('/dptm/:department', getByDepartment);
router.get('/price/:minPice', getByPrice);
router.get('/:productoId', getById);



router.post('/', createProduct);
router.put('/:productoId', updateById);
router.delete('/:productoId', deleteById);














module.exports = router;