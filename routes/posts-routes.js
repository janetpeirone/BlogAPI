const router = require('express').Router();

const { Post, Category } = require('../db');

// Retrieve all posts with createdAt order DESC (only columns id, title, image, category and createdAt)
router.get('/posts', (req,res) => {
    Post.findAll({ 
        order: [['id','DESC']],
        attributes: ['id','title','image',['postCategory','category'],'createdAt']      
    })
    .then( (posts) => {
        res.json(posts) 
    })
    .catch( (error) => {
        res.json(error)
    })      
});

// Create a new post
router.post('/posts', (req,res) => {
    Category.findOrCreate({
        where: { category: req.body.category }
    })
    .then( ([category, created]) => {        
        Post.create(req.body)
        .then( (post) => {
            post.setCategory(category);
            res.json(post);
        })
        .catch( (error) => {
            res.json(error)
        })
    })
    .catch( (error) => {
        res.json(error)
    })   
});

module.exports = router;