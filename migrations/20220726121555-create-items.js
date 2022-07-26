'use strict'

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
          primaryKey: true,
          unique: true,
          allowNull: false,
        },
        weight: {
          type: Sequelize.INTEGER,
        },
        stocks:{
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
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
