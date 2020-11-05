const { Sequelize } = require("sequelize");
const PostModel = require('./models/post');
const CategoryModel = require('./models/category');

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

const Post = PostModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);

Category.hasMany(Post);

sequelize.sync( {force: true} )
    .then(() => {
        console.log('The tables were just created')
    })
    
module.exports = {
    Post,
    Category
}