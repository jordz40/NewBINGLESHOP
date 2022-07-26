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
    items_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'items',
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    orders_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    total_price: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references : {
        model: 'items',
        key: 'price',
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    payStatus: {
      type: Sequelize.ENUM,
      values: ['Orders Paid', 'UNPAID'],
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM,
      values: ['ORDER FAILED', 'ORDER SUCCESS'],
      allowNull: false,
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
