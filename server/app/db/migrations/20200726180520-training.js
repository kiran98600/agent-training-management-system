'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('trainings', 'training_id', {
        type: Sequelize.Sequelize.STRING(100)
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('trainings', 'training_id'),
    ]);
  }
};
