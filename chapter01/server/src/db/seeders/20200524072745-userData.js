'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: 'foo',
      password: 'foo',
      name: 'foo',
      createdAt: '2020-05-24',
      updatedAt: '2020-05-24',
    },{
      id: 'bar',
      password: 'bar',
      name: 'bar',
      createdAt: '2020-05-24',
      updatedAt: '2020-05-24',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
