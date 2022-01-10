'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('training_participants', 'is_certificate_ready', {
        type: Sequelize.Sequelize.INTEGER
      }),
      queryInterface.addColumn('training_participants', 'is_certificate_issued', {
        type: Sequelize.Sequelize.INTEGER
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('training_participants', 'is_certificate_ready'),
      queryInterface.removeColumn('training_participants', 'is_certificate_issued')
    ]);
  }
};
