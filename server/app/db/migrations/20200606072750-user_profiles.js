'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('profile', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      uuid: {
        type: 'varchar(36)',
        allowNull: false,
        unique: true
      },
      profile_name: {
        type: Sequelize.STRING(200),
        allowNull: false,
        unique: true
      },
      profile_description: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      is_active: Sequelize.BOOLEAN,
      created_by: Sequelize.INTEGER,
      created_date: Sequelize.BIGINT,
      updated_by: Sequelize.INTEGER,
      updated_date: Sequelize.BIGINT,
      is_deleted: Sequelize.BOOLEAN
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('profile');
  }
};
