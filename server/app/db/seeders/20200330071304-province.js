'use strict';
const uuid = require('uuid/v4');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('province', [
      {
        id:1,
        uuid: uuid(),
        province_name: 'Province 1',
        is_active: 1
      },
      {
        id:2,
        uuid: uuid(),
        province_name: 'Province 2',
        is_active: 1
      },
      {
        id:3,
        uuid: uuid(),
        province_name: 'Bagmati',
        is_active: 1
      },
      {
        id:4,
        uuid: uuid(),
        province_name: 'Gandaki',
        is_active: 1
      },
      {
        id:5,
        uuid: uuid(),
        province_name: 'Province 5',
        is_active: 1
      },
      {
        id:6,
        uuid: uuid(),
        province_name: 'Kamali',
        is_active: 1
      },
      {
        id:7,
        uuid: uuid(),
        province_name: 'Sudurpashchim',
        is_active: 1
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('province', null, {});
  }
};
