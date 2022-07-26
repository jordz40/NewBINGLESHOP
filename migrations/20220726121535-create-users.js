'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'users',
      {
        id: {
          type: sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
          allowNull: false
        },
        name: {
          type: sequelize.INTEGER
        },
        address: {
          type: sequelize.INTEGER
        },
        password: {
          type: sequelize.INTEGER
        },
        phone: {
          type: STRING
        },
        email: {
          type: sequelize.INTEGER
        },
        created_at: {
          type: sequelize.DATE,
          default: new Date()
        },
        updated_at: {
          type: sequelize.DATE,
          default: new Date()
        },
        deleted_at: {
          type: sequelize.DATE,
          default: new Date()
        },
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
};

