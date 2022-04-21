'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('risks', [{      
      category: "Governance",
      title:"Not known",
      description:"There is a risk of compromise due to a lack of mature security and systems hygiene, policies and processes. ",
      impact:"",
      likelihood:"",
      rating:"",      
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('risks', [{      
      category: "Operational",
      title:"Not Known",
      description:"There is a risk of ransomware or malware breach due to social engineering through spear phishing.",
      impact:"",
      likelihood:"",
      rating:"",   
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("risks", null, {});
  }
}