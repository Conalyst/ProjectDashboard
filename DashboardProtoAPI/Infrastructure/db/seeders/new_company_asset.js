'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('company_assets', [{      
      assetId: 1,
      companyId: 2,
      confidentiality:"L",
      integrity:"L",
      availability:"L",
      rating:"L",      
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('company_assets', [{      
      assetId: 3,
      companyId: 2,
      confidentiality:"M",
      integrity:"M",
      availability:"M",
      rating:"M",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('company_assets', [{      
      assetId: 5,
      companyId: 2,
      confidentiality:"H",
      integrity:"H",
      availability:"L",
      rating:"H",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('company_assets', [{      
      assetId: 6,
      companyId: 2,
      confidentiality:"H",
      integrity:"H",
      availability:"H",
      rating:"H",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('company_assets', [{      
      assetId: 2,
      companyId: 3,
      confidentiality:"M",
      integrity:"H",
      availability:"M",
      rating:"H",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('company_assets', [{      
      assetId: 4,
      companyId: 3,
      confidentiality:"H",
      integrity:"H",
      availability:"H",
      rating:"H",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('company_assets', [{      
      assetId: 7,
      companyId: 3,
      confidentiality:"M",
      integrity:"M",
      availability:"H",
      rating:"H",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('company_assets', [{      
      assetId: 8,
      companyId: 3,
      confidentiality:"N/A",
      integrity:"N/A",
      availability:"M",
      rating:"M",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('company_assets', [{      
      assetId: 9,
      companyId: 3,
      confidentiality:"N/A",
      integrity:"H",
      availability:"N/A",
      rating:"H",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("assets", null, {});
  }
}