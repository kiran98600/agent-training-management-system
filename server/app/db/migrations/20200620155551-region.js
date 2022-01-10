'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('branch_regions',
      {
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
        branch_region: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        branch_region_name: {
          type: Sequelize.STRING(200),
          allowNull: false
        },
        is_active: Sequelize.INTEGER,
        created_by: Sequelize.INTEGER,
        created_date: Sequelize.BIGINT,
        updated_by: Sequelize.INTEGER,
        updated_date: Sequelize.BIGINT,
        is_deleted: Sequelize.BOOLEAN
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('branch_regions');
  }
};
