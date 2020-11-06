const { Sequelize } = require("sequelize");
const PostModel = require('./post');
const CategoryModel = require('./category');

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
Post.belongsTo(Category, { targetKey: 'category', foreignKey: 'postCategory' });

sequelize.sync( {force: false} )
    .then(() => {
        console.log('The tables were just created')
    })
    .catch((error) => {
        console.log('There was an error', error)
    })
    
module.exports = {
    Post,
    Category
}