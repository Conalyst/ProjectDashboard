'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: "victoria",
      email: "victoria@valencia.com",
      password: "$2b$10$YTbenZcXxssb/iLi6d9yI.peJHmtzq/a5z.m0oM.Y/X2Smr/U.lc.",
      companyId: 1,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('users', [{
      name: "sam",
      email: "sam@abc.com",
      password: "$2b$10$VWzF/ljTmLHavdh05gAH6.oy5QK32Wa38k3qbWCEGyTsOW9Wu13Me",
      companyId: 1,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize)=> {
    return queryInterface.bulkDelete("users", null, {});
  }
};