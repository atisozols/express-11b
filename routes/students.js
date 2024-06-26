const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController')

router.route('/').get(studentController.getAll);
router.route('/').post(studentController.addStudent);
router.route('/:id').get(studentController.getStudentById);

module.exports = router;