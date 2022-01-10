'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.createTable('province',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false
        },
        uuid: {
          type: 'varchar(36)', unique: true, allowNull: false
        },
        province_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        order : {
          type: Sequelize.INTEGER
        },
        status: Sequelize.BOOLEAN,
        is_active: Sequelize.BOOLEAN,
        created_by: Sequelize.INTEGER,
        created_date: Sequelize.BIGINT,
        updated_by: Sequelize.INTEGER,
        updated_date: Sequelize.BIGINT,
        is_deleted: Sequelize.BOOLEAN
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('province');
  }
};
