'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('companies', [{
      name: "Valencia Global",
      address: "1327a Wellington St. W, Ottawa, ON K1Y 3B6",
      website: "https://www.valencia.global/",
      email: "hello@valencia.global",
      phone: "(647) 689-3032",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('companies', [{
      name: "ABC Pvt. Lmtd",
      address: "123, fun road, ottawa",
      website: "https://www.abc.com",
      email: "abc@abc.com",
      phone: "123-345-4567",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('companies', [{
      name: "XYZ Pvt. Lmtd",
      address: "567, Terry Fox road, ottawa",
      website: "https://www.xyz.ca",
      email: "xyz@xyz.com",
      phone: "563-389-4039",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("companies", null, {});
  }
};
