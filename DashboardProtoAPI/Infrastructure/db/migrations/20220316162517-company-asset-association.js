'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addConstraint('company_assets', {
      fields: ['assetId'],
      type: 'foreign key',
      name: 'asset_association',
      references: {
        table: 'assets',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
    queryInterface.addConstraint('company_assets', {
      fields: ['companyId'],
      type: 'foreign key',
      name: 'company_association',
      references: {
        table: 'companies',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('company_assets','asset_association')   
    queryInterface.removeConstraint('company_assets','company_association')
  }
};