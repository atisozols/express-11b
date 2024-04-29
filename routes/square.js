const express = require('express');
const router = express.Router();
const squareController = require('../controllers/squareController');

router.route('/').post(squareController.squareNumber);

module.exports = router;