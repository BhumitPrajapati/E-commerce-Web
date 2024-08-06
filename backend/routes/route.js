const express = require('express');

const upload = require('../middlewares/multer.middleware');

const productController = require('../controllers/product/product');
const imageController = require('../controllers/product/image');
const adminDashboardController = require('../controllers/admin/addProduct.js');
const { login } = require('../controllers/admin/login.js')
const authMiddleware = require('../middlewares/authantication.js');

const router = express.Router();
// router.use(authMiddleware);

router.route('/').get(productController.getProduct);
router.route('/upload').post(upload.single('image'), imageController.uploadImage);
router.route('/login').get(login)


module.exports = router;