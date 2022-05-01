'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('risks', [{      
      category: "Governance",
      title:"Lack of mature cyber-security",
      description:"There is a risk of compromise due to a lack of mature security and systems hygiene, policies and processes. ",
      impact:"L",
      likelihood:"H",
      rating:"M",      
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('risks', [{      
      category: "Operational",
      title:"Risk of ransomware or malware",
      description:"There is a risk of ransomware or malware breach due to social engineering through spear phishing.",
      impact:"H",
      likelihood:"L",
      rating:"H",   
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('risks', [{      
      category: "Technical",
      title:"Use of legacy applications",
      description:"CLIENT is using legacy applications that are no longer supported.",
      impact:"M",
      likelihood:"M",
      rating:"M",   
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("risks", null, {});
  }
}