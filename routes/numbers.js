const express = require('express');
const router = express.Router();
const numbersController = require('../controllers/numbersController')

router.route('/').get(numbersController.getNumbers);
router.route('/:id').get(numbersController.getNumberById);

module.exports = router;