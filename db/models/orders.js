const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

class Orders extends Sequelize.Model {}

Orders.init({
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model:'users',
            key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    items_order: {
        type: Sequelize.DataTypes.STRING
    },
    item_qty: {
        type: Sequelize.DataTypes.INTEGER
    },
    amount: {
        type: Sequelize.DataTypes.INTEGER
    },
    payStatus: {
        type: Sequelize.DataTypes.STRING
    },
    status: {
        type: Sequelize.DataTypes.STRING
    }
    
},
 {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    modelName:'Orders',
    tableName: 'orders',
 } 
 )
 module.exports = Orders