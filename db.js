const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const PostModel = require('./models/post');

const sequelize = new Sequelize('blog_db','root','hola123',{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })   
    .catch ((error) => {
    console.error('Unable to connect to the database:', error);
    })

const Post = PostModel(sequelize, DataTypes);
Post.sync()
    .then(() => {
        console.log('Post table was just created')
    })
    
module.exports = {
    Post
}