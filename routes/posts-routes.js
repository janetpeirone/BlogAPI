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

// Retrieve post by id
router.get('/posts/:id', (req,res) => {
    Post.findByPk( req.params.id )
    .then( (post) => {
        if(post === null) {
            res.json('Error: Post not found!');        
        }
        else {
            res.json(post);
        }
    })
    .catch( (error) => {
        res.json(error)
    })
})

// Delete post by id
router.delete('/posts/:id', (req,res) => {
    Post.destroy({
        where: { id: req.params.id }
    })
    .then( (post) => {
        if(post === 0) {
            res.json('Error: Post not found!');        
        }
        else {
            res.json('Post was deleted!');
        }
    })
    .catch( (error) => {
        res.json(error)
    })
})

module.exports = router;