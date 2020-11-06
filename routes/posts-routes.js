const router = require('express').Router();
const posts = require('../controllers/posts-controller');

// Retrieve all posts with createdAt order DESC (only columns id, title, image, category and createdAt)
router.get('/posts', posts.findAll);

// Create and Save a new post
router.post('/posts', posts.create);

// Retrieve post by id
router.get('/posts/:id', posts.findById);

// Delete post by id
router.delete('/posts/:id', posts.delete);

// Update post by id
router.patch('/posts/:id', posts.update);

module.exports = router;