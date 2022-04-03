'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addConstraint('users', {
      fields: ['companyId'],
      type: 'foreign key',
      name: 'user_company_association',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('users','user_company_association')
  }
};
