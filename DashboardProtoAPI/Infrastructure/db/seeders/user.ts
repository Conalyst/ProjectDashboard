
"use strict";

module.exports = {
 
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        username: 'abd@g.c',
        createdAt: new Date(),
        updatedAt: new Date(),
        password:"123",
        user_type:"internal"
      },
    ]);

    await queryInterface.bulkInsert("Users", [
        {
          id: 2,
          username: 'clientAdmin@g.c',
          createdAt: new Date(),
          updatedAt: new Date(),
          password:"456",
          user_type:"external"
        },
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
