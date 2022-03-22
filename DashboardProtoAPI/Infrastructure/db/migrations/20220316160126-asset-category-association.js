'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addConstraint('assets', {
      fields: ['asset_categoryId'],
      type: 'foreign key',
      name: 'asset_category_association',
      references: {
        table: 'assets',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('assets','asset_category_association')
  }
};