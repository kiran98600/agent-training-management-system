'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('training_participants', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      training_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      agent_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('training_participants');
  }
};
