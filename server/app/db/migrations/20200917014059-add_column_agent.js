'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('agents', 'citizenship_issue_date_bs', {
        type: Sequelize.Sequelize.STRING()
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('agents', 'citizenship_issue_date_bs')
    ]);
  }
};
