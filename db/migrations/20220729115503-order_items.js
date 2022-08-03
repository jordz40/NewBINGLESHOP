'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('order_items',
    {
      id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      id_user_items: {
        type: sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
       },
       onUpdate: 'CASCADE',
       onDelete: 'CASCADE',
      },
      order_id: {
        type: sequelize.INTEGER,
        references: {
        model: 'orders',
        key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name_items: {
        type: sequelize.STRING,
      },
      items_id: {
        type: sequelize.INTEGER,
        references: {
        model: 'items',
        key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      item_qty: {
        type: sequelize.INTEGER,
        },
      total_price: {
        type: sequelize.INTEGER,
        },
      created_at: {
        type: Sequelize.DATE,
        default: new Date()
        },
      updated_at: {
        type: Sequelize.DATE,
        default: new Date()
        },
      deleted_at: {
        type: Sequelize.DATE
      },
  
  })
},

async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
