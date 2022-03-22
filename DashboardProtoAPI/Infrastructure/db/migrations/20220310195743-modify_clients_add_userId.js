'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Clients',
      'userId',
      {
        type: Sequelize.INTEGER,
        allownNull: false,
        defaultValue: '1'
      }
    )
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

   down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('clients', 'userId');
  }
};
