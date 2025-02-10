const router = require('express').Router();

const { getAll, getByDepartment, getById, create, updateById, deleteById, getByPrice } = require('../../controllers/products.controller');
const { checkToken, checkAdmin } = require('../../middlewares/users.middleware');

router.get('/', getAll);
router.get('/dptm/:department', getByDepartment);
router.get('/price/:minPrice', getByPrice);
router.get('/:productId', getById);

router.post('/', checkToken, create);
router.put('/:productId', checkToken, updateById);
router.delete('/:productId', checkToken, checkAdmin, deleteById);

module.exports = router;
