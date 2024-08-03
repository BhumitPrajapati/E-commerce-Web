const express = require('express');

const upload = require('../middlewares/multer.middleware');

const productController = require('../controllers/product/product');
const imageController = require('../controllers/product/image');
const adminDashboardController = require('../controllers/admin/addProduct.js');

const router = express.Router();

router.route('/').get(productController.getProduct);
router.route('/upload').post(upload.single('image'), imageController.uploadImage);
// router.route('/admin/addProduct').post(upload.single('image'), adminDashboardController.addProduct);


module.exports = router;