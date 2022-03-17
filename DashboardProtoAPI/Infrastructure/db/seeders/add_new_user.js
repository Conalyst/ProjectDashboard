'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('users', [{
        name: "victoria Torp",
        email: "victoria@valencia.com",
        password: "test",
        companyId: 1,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
      await queryInterface.bulkInsert('users', [{
        name: "Roe Sivanaden",
        email: "roe@valencia.com",
        password: "test",
        companyId: 1,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
      await queryInterface.bulkInsert('users', [{
        name: "Aeron",
        email: "aeron@valencia.com",
        password: "test",
        companyId: 1,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
      await queryInterface.bulkInsert('users', [{
        name: "Meri",
        email: "meri.abc@hotmail.com",
        password: "test",
        companyId: 2,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
      await queryInterface.bulkInsert('users', [{
        name: "Victor",
        email: "victor.abc@hotmail.com",
        password: "test",
        companyId: 2,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
      await queryInterface.bulkInsert('users', [{
        name: "Dan",
        email: "dan.xyz@hotmail.com",
        password: "test",
        companyId: 3,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
      await queryInterface.bulkInsert('users', [{
        name: "Eric",
        email: "eric.xyz@hotmail.com",
        password: "test",
        companyId: 3,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});    
  },

  down: async (queryInterface, Sequelize)=> {
    return queryInterface.bulkDelete("users", null, {});
  }
};
