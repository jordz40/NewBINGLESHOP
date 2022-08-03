const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

class OrderItem extends Sequelize.Model {}

OrderItem.init({
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },
    id_user_items: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete:'CASCADE',
    },
    order_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: 'orders',
            key: 'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
    },
    name_items: {
        type: Sequelize.DataTypes.STRING,
    },
    items_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model:'items',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete:'CASCADE',
    },
    item_qty: {
        type: Sequelize.DataTypes.INTEGER,
    },
    total_price: {
        type: Sequelize.DataTypes.INTEGER,
    },
},
    {
        sequelize: sequelize,
        timestamps: true, // created_at update_at delete_at
        underscored: true,// buat underscored table,
        paranoid: true,
        freezeTableName: true,
        modelName: 'OrderItem',
        tableName: 'order_items',
    }
)

module.exports = OrderItem