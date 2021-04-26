'use strict';
const faker = require('faker');
const { reviewsData } = require('../../../seed-data');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const initialReviewData = reviewsData;

    return queryInterface.bulkInsert('Reviews', initialReviewData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
