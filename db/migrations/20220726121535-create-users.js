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
          type: sequelize.STRING
        },
        address: {
          type: sequelize.STRING
        },
        password: {
          type: sequelize.STRING
        },
        phone: {
          type: sequelize.STRING
        },
        email: {
          type: sequelize.STRING
        },
        gender: {
          type: sequelize.STRING
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

        },
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
};

