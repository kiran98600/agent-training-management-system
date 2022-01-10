'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('branches',
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
        branch: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        branch_name: {
          type: Sequelize.STRING(200),
          allowNull: false
        },
        branch_name_nep: {
          type: Sequelize.STRING(200),
          allowNull: false
        },
        branch_region: {
          type: Sequelize.INTEGER,
        },
        location: {
          type: Sequelize.STRING(200)
        },
        location_latitude: {
          type: Sequelize.DOUBLE
        },
        location_longitude: {
          type: Sequelize.DOUBLE
        },
        contact_number: {
          type: Sequelize.STRING(150)
        },
        serving_days: {
          type: Sequelize.INTEGER(1)
        },
        is_evening_counter_available: {
          type: Sequelize.BOOLEAN
        },
        district_id: {
          type: Sequelize.INTEGER(10)
        },
        province_id: {
          type: Sequelize.INTEGER(10)
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
    return queryInterface.dropTable('branches');
  }
};
