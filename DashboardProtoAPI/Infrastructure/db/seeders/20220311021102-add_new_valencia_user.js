'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('valencia', [{
        email: "victoria@valencia.com",
        password: "test",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
      await queryInterface.bulkInsert('valencia', [{
        email: "roe@valencia.com",
        password: "test",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
      await queryInterface.bulkInsert('valencia', [{
        email: "areon@valencia.com",
        password: "test",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("valencia", null, {});
  }
};
