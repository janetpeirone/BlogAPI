module.exports = (sequelize, type) => {
    return sequelize.define('category', {
        // Model attributes are defined here
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: type.STRING,
            unique: true,
            allowNull: false
        }
    }, 
        { timestamps: false}
    );
}