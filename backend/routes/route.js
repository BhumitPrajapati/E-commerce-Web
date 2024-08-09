const express = require('express');
const upload = require('../middlewares/multer.middleware');

const productController = require('../controllers/product/product');
const imageController = require('../controllers/product/image');
const adminDashboardController = require('../controllers/admin/dashboard.js');
const { login } = require('../controllers/admin/login.js')

const router = express.Router();

router.route('/').get(productController.getProduct);
router.route('/upload').post(upload.single('image'), imageController.uploadImage);
router.route('/login').post(login)
router.route('/addProduct').post(adminDashboardController.addProduct);
router.route('/updateProduct').post(adminDashboardController.updateProduct);


module.exports = router;