'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('profile_menus', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      profile_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      menu_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('profile_menus');
  }
};
