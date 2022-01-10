'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('training_attendance', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      training_id: {
        type: Sequelize.STRING(100),
      },
      training_date: {
        type: Sequelize.STRING(100),
      },
      agent_id: {
        type: Sequelize.INTEGER,
      },
      is_present: {
        type: Sequelize.BOOLEAN,
      },
      is_video_on: {
        type: Sequelize.BOOLEAN,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('training_attendance');
  }
};
