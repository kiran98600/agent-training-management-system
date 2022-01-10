'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('training_trainer', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      training_id: {
        type: Sequelize.STRING(100),
      },
      content: {
        type: Sequelize.STRING(200),
      },
      trainer_name: {
        type: Sequelize.STRING(250),
      },
      training_date: {
        type: Sequelize.STRING(100),
      },
      training_time: {
        type: Sequelize.STRING(100),
      },
      trainer_email: {
        type: Sequelize.STRING(250),
      },
      trainer_phone_number: {
        type: Sequelize.STRING(25),
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('training_trainer');
  }
};
