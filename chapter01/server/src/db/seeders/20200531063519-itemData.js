'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      name: 'item1',
      cost: 100000,
      createdAt: '2020-05-24',
      updatedAt: '2020-05-24',
    },{
      name: 'item2',
      cost: 200000,
      createdAt: '2020-05-24',
      updatedAt: '2020-05-24',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
