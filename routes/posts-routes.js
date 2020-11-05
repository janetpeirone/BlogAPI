const router = require('express').Router();

const { Post, Category } = require('../db');

router.get('/posts', async (req,res) =>{
    const posts = await Post.findAll({ 
        order: [['id','DESC']],
        attributes: ['id','title','image',['postCategory','category'],'createdAt']      
    })
    res.json(posts)   
});

router.post('/posts', async (req,res) =>{
    const [category, created] = await Category.findOrCreate({
        where: { category: req.body.category }
    })
    const post = await Post.create(req.body);
    await post.setCategory(category);
    res.json(post)
});

module.exports = router;