'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('menus', {
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
      privilege_name: {
        type: Sequelize.STRING(200),
        allowNull: false,
        unique: true
      },
      parent_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      is_parent: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      is_menu: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      is_action: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      action_items: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      sub_menu_name: {
        type: Sequelize.STRING(70),
        allowNull: true
      },
      api_route: {
        type: Sequelize.STRING(500),
      },
      frontend_route: {
        type: Sequelize.STRING(500),
      }
    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('menus');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
