'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('app_users',
      {
        uuid: {
          type: 'varchar(36)',
          unique: true,
          allowNull: false
        },
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        full_name: {
          type: Sequelize.STRING(200),
          allowNull: false
        },
        email: {
          type: Sequelize.STRING(150),
          allowNull: false
        },
        profile_id: {
          type: Sequelize.INTEGER,
        },
        user_type: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        phone_number: {
          type: Sequelize.STRING(20),
          allowNull: false
        },
        branch_region: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        branch_id: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        password: {
          type: Sequelize.STRING(150),
          allowNull: false
        },
        salt: {
          type: Sequelize.STRING(150),
          allowNull: false
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
    return queryInterface.dropTable('app_users');
  }
};
