'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trainings',
      {
        uuid: {
          type: 'varchar(36)',
          unique: true,
          allowNull: false
        },
        id: {
          type: Sequelize.BIGINT,
          autoIncrement: true,
          primaryKey: true
        },
        training_name: {
          type: Sequelize.STRING(250),
        },
        trainer_name: {
          type: Sequelize.STRING(150),
        },
        training_date_to: {
          type: Sequelize.STRING(150),
        },
        training_date_from: {
          type: Sequelize.STRING(150),
        },
        training_time: {
          type: Sequelize.STRING(100),
        },
        training_region: {
          type: Sequelize.INTEGER,
        },
        training_branch: {
          type: Sequelize.INTEGER,
        },
        is_virtual_training: {
          type: Sequelize.INTEGER,
        },
        training_link: {
          type: Sequelize.TEXT,
        },
        max_participant_allowed: {
          type: Sequelize.INTEGER,
        },
        venue: {
          type: Sequelize.STRING(200),
        },
        status: Sequelize.INTEGER,
        is_blocked: Sequelize.BOOLEAN,
        is_deleted: Sequelize.BOOLEAN,
        created_by: Sequelize.INTEGER,
        created_date: Sequelize.BIGINT,
        updated_by: Sequelize.INTEGER,
        updated_date: Sequelize.BIGINT
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trainings');
  }
};
