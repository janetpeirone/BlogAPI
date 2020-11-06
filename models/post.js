module.exports = (sequelize, type) => {
    return sequelize.define('post', {
        // Model attributes are defined here
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: type.STRING,
            allowNull: false
        },
        content: {
            type: type.TEXT,
            allowNull:false
        },
        image: type.TEXT        
    });
}