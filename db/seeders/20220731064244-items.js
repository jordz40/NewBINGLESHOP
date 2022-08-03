'use strict';

const { Items } = require("../models");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items',[
    {
      id: 1,
      item_name: 'sepatu Nike Air Jordan',
      price: 5000000,
      stocks: 20,
      weight: '2kg',
      status: 'available',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      item_name: 'TAS SUPREME',
      price: 1000000,
      stocks: 25,
      weight: '1kg',
      status: 'available',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 3,
      item_name: 'LAPTOP ROG',
      price: 15000000,
      stocks: 5,
      weight: '5kg',
      status: 'available',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 4,
      item_name: 'mouse razer',
      price: 700000,
      stocks: 100,
      weight: '1kg',
      status: 'available',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 5,
      item_name: 'kacamata',
      price: 400000,
      stocks: 4,
      weight: '2kg',
      status: 'available',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 6,
      item_name: 'TAS BODYPAK',
      price: 200000,
      stocks: 11,
      weight: '2kg',
      status: 'available',
      created_at: new Date(),
      updated_at: new Date()
    }
  ],{})
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('items',null,{})
  }
};
