'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('roles', [{
      name: "Admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('roles', [{
      name: "IT Manager",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('roles', [{
      name: "Guest",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("roles", null, {});
  }
};
