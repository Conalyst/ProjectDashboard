'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('company_assets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      assetId: {
        type: Sequelize.INTEGER        
      },
      companyId: {
        type: Sequelize.INTEGER
      },
      confidentiality: {
        type: Sequelize.STRING
      },
      integrity: {
        type: Sequelize.STRING
      },
      availability: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('company_assets');
  }
};