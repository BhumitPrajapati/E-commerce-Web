const express = require('express');

const { getUser } = require('../controllers/demo');

const router = express.Router();

router.route('/user').get(getUser);

module.exports = router;