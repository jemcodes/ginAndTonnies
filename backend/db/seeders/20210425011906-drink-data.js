'use strict';
const faker = require('faker');
const { drinksData } = require('../../../seed-data');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const initialDrinkList = drinksData;

    return queryInterface.bulkInsert('Drinks', initialDrinkList, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Drinks', null, {});
  }
};

