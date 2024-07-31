const express = require('express');

const upload = require('../middlewares/multer.middleware');

const productController = require('../controllers/product/product');
const imageController = require('../controllers/product/image');

const router = express.Router();

router.route('/').get(productController.getProduct);
router.route('/products/getCategory').get(productController.getCategories);
router.route('/products/:id').get(productController.getProductById);
router.route('/upload').post(upload.single('image'), imageController.uploadImage);
router.route('/getImages').get(imageController.getImages);


module.exports = router;