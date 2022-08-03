const Sequelize = require('sequelize');
const sequelize = require('./sequelize');


class Items extends Sequelize.Model {}

Items.init({
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },
    item_name: {
        type: Sequelize.DataTypes.STRING,
    },
    price: {
        type: Sequelize.DataTypes.INTEGER
    },
    stocks: {
        type: Sequelize.DataTypes.INTEGER
    },
    weight: {
        type: Sequelize.DataTypes.STRING
    },
    status: {
        type: Sequelize.DataTypes.STRING
    },

}, {
    sequelize : sequelize,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    modelName: 'Items',
    tableName:'items'
})
module.exports = Items