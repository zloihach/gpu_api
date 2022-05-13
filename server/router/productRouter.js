const Router = require('express')
const router = new Router()

const productController = require('../controller/productСontroller')

router.post('/',productController.create);
router.get('/',productController.getall);
router.get('/:id',productController.getOne);
router.delete('/:id',productController.deleteOne)

module.exports = router;
