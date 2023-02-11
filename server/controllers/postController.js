import * as postService from '../services/postService.js';

export const createPost = async (req, res) => {
  const post = req.body;

  console.log(req.body);

  if (post.title) {
    await postService.createPost(post);
  }

  return res.status(200).send(post);
};
