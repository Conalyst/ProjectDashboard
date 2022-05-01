'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('risks', [{      
      category: "Governance",
      title:"Not known",
      description:"There is a risk of compromise due to a lack of mature security and systems hygiene, policies and processes. ",
      impact:"L",
      likelihood:"H",
      rating:"M",      
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('risks', [{      
      category: "Operational",
      title:"Not Known",
      description:"There is a risk of ransomware or malware breach due to social engineering through spear phishing.",
      impact:"H",
      likelihood:"L",
      rating:"H",   
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('risks', [{      
      category: "Technical",
      title:"Not Known",
      description:"There is a risk of unknown factors.",
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