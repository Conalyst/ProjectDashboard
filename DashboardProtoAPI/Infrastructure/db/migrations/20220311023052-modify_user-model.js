'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Users',
      'username',
      {
        type: Sequelize.STRING,
        allownNull: false
      },
      'password',
      {
        type: Sequelize.STRING,
        allownNull: false
      }
    )
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  //  down: async (queryInterface, Sequelize) => {

  //   await queryInterface.removeColumn('users', 'username');
  //   await queryInterface.removeColumn('users', 'password');
  // }
};
