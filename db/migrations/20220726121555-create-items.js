'use strict'

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'items',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
          allowNull: false,
        },
        item_name:{
          type: Sequelize.STRING,
        },
        price:{
          type: Sequelize.INTEGER,
        },
        stocks:{
          type: Sequelize.INTEGER
        },
        weight: {
          type: Sequelize.STRING,
        },
        status: {
          type: Sequelize.STRING
        },
        created_at: {
          type: Sequelize.DATE,
        },
        updated_at: {
          type: Sequelize.DATE,
          },
        deleted_at: {
          type: Sequelize.DATE,
        },
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('items')
  
  }
};
