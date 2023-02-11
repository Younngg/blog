import express from 'express';
import * as postController from '../controllers/postController.js';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('hi');
});
router.post('/', postController.createPost);

export default router;
