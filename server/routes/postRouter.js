const express = require('express');
const postController = require('../controllers/postController.js');

const router = express.Router();

router.post('/', postController.createPost);

module.exports = router;
