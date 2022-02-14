import { v4 as uuidv4} from 'uuid';


'use strict';

module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('tests', [{
       id: uuidv4(),
      title: 'test1',
      createdAt: new Date(),
      updatedAt: new Date()
     }]);
     await queryInterface.bulkInsert('tests', [{
        id: uuidv4(),
        title: 'test2',
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
     }]);

     await queryInterface.bulkInsert('orders', [{
      userId: 4,
      restaurantId: 4,
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
     }]);

  },

  down: async (queryInterface:any, Sequelize:any) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('orders', null, {});
     */

     await queryInterface.bulkDelete('tests', null, {})
  }
};
