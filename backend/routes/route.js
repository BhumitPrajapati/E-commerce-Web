const express = require('express');

const { getProduct } = require('../controllers/product/product');

const router = express.Router();

router.route('/getProduct').get(getProduct);

module.exports = router;