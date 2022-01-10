'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_loggedin_sessions_archive',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        token: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        timestamp: {
          type: Sequelize.BIGINT,
          allowNull: false
        },
        session_expiry_timestamp: {
          type: Sequelize.BIGINT,
          allowNull: false
        },
        ip: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        logged_out_on: {
          type: Sequelize.BIGINT,
          allowNull: false
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_loggedin_sessions_archive');
  }
};
