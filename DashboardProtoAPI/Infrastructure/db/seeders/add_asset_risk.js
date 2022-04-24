'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('risk_assets', [{     
      riskId: 1, 
      assetId: 2,     
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('risk_assets', [{     
      riskId: 1, 
      assetId: 9,     
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('risk_assets', [{     
      riskId: 2, 
      assetId: 1,     
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('risk_assets', [{     
      riskId: 2, 
      assetId: 3,     
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('risk_assets', [{     
      riskId: 2, 
      assetId: 4,     
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('risk_assets', [{     
      riskId: 2, 
      assetId: 5,     
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('risk_assets', [{     
      riskId: 2, 
      assetId: 6,     
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('risk_assets', [{     
      riskId: 2, 
      assetId: 7,     
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('risk_assets', [{     
      riskId: 2, 
      assetId: 8,     
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('risk_assets', [{     
      riskId: 2, 
      assetId: 9,     
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('risk_assets', [{     
      riskId: 3, 
      assetId: 1,     
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('risk_assets', [{     
      riskId: 3, 
      assetId: 8,     
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("risk_assets", null, {});
  }
}