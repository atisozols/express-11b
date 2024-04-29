const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')

router.route('/').get(postController.getAllPosts);
router.route('/:id').get(postController.getPostById);
router.route('/').post(postController.addPost);

module.exports = router;