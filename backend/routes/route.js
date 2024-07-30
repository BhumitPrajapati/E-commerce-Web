const express = require('express');
const imgUpload = require('../middlewares/imgUpload')

const productController = require('../controllers/product/product');
const addProductImgController = require('../controllers/product/addProduct');

const router = express.Router();

router.route('/getProduct').get(productController.getProduct);
router.route('/products/getCategory').get(productController.getCategories);
router.route('/products/:id').get(productController.getProductById);
router.route('/addProductImg').post(imgUpload.single('image'),addProductImgController.uploadImage);


module.exports = router;