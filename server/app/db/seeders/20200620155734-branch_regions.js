'use strict';
const uuidv4 = require('uuid/v4')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('branch_regions', [
        {
          "uuid": uuidv4(),
          "branch_region": "1",
          "branch_region_name": "Region 1",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch_region": "2",
          "branch_region_name": "Region 2",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch_region": "3",
          "branch_region_name": "Region 3",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch_region": "4",
          "branch_region_name": "Region 4",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch_region": "5",
          "branch_region_name": "Region 5",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch_region": "6",
          "branch_region_name": "Region 6",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch_region": "7",
          "branch_region_name": "Region 7",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch_region": "8",
          "branch_region_name": "Region 8",
          "is_active": "1"
        },
        {
          "uuid": uuidv4(),
          "branch_region": "9",
          "branch_region_name": "Region 9",
          "is_active": "1"
        },


      ]);
      return Promise.resolve();
    } catch (error) {
      console.log(error)
      return Promise.reject();
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('branch_regions', null, {});
  }
};
