'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('certificate_sequence', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      sequence_id: {
        type: Sequelize.BIGINT,
      },
      training_id: {
        type: Sequelize.BIGINT,
      },
      agent_id: {
        type: Sequelize.BIGINT,
      },
      created_by: {
        type: Sequelize.BIGINT,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('certificate_sequence');
  }
};
