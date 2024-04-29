const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contactFormController');

router.route('/').post(contactFormController.processForm); // POST /contact

module.exports = router;