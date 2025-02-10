const router = require('express').Router();

const { getAll, getByDepartment, getById, createProduct, updateById, deleteById, getByPrice } = require('../../controllers/products.controller');
const { checkToken, checkAdmin } = require('../../middlewares/users.middleware');


router.get('/', getAll);
router.get('/dptm/:department', getByDepartment);
router.get('/price/:minPice', getByPrice);
router.get('/:productoId', getById);



router.post('/', checkToken, createProduct);
router.put('/:productoId', checkToken, updateById);
router.delete('/:productoId', checkToken, checkAdmin, deleteById);














module.exports = router;