'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
    "orders", 
    {
          id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
            
          },
          user_id :{
            type: sequelize.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
            onDelete: 'CASCADE',
            onupdate: 'CASCADE',
          },
          items_order: {
            type: Sequelize.STRING,
          },
          item_qty: {
            type: Sequelize.INTEGER,
          },
          amount: {
            type: Sequelize.INTEGER,
          },
          payStatus: {
            type: Sequelize.STRING,
            // values: ['Orders Paid', 'UNPAID'],
            // allowNull: false,
          },
          status: {
            type: Sequelize.STRING,
            // values: ['ORDER FAILED', 'ORDER SUCCESS'],
            // allowNull: false,
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
    await queryInterface.dropTable('orders')
  
  }
};
