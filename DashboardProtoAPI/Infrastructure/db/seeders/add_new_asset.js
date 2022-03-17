'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('assets', [{      
      asset_categoryId: 1,
      title:"Microsoft Office",
      description:"Microsoft Office is an office suite of desktop applications, servers and services for the Microsoft Windows and Mac operating systems. It includes Microsoft Word, Excel, PowerPoint, Outlook and OneNote. Microsoft Office is standard on all KU-owned workstations for faculty and staff. This asset includes M365 with locally stored documents. ",

      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('assets', [{      
      asset_categoryId: 1,
      title:"S.A.P. ",
      description:"S.A.P. is a German developed software that manages business operations and customer relations (well known for ERP).  CLIENT NAME utilise the software as an enterprise resource planning (ERP) software. S.A.P. is the main source for operational information such as customer / client engagement activities, financial, manufacturing and other performance data. S.A.P. is running off 2008 and needs modernization. ",

      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('assets', [{      
      asset_categoryId: 2,
      title:"Business Continuity Plan & Disaster Recovery Plan. ",
      description:"This asset refers to a formal policy plan that is well documented.  The BCP and DRP should contain detailed instructions on how to respond to unplanned incidents such as cyber attacks, natural disasters or power outage. ",
  
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('assets', [{      
      asset_categoryId: 2,
      title:"Backup Procedures",
      description:"This asset refers to proceedures related to document backup.CLIENT NAME has Standard Operating Procedures which outlines the details for scheduling backups and backup recovery.",

      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('assets', [{      
      asset_categoryId: 3,
      title:"Account Password",
      description:"A secret that should be know to an individual or system to control access to a system.",

      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('assets', [{      
      asset_categoryId: 3,
      title:"Domain Controllers",
      description:"A domain controller is a server that responds to authentication requests and verifies users on computer networks.",

      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('assets', [{      
      asset_categoryId: 4,
      title:"Security Devices (Corporate Network) Firewall",
      description:"This asset speaks to firewalls that are logically placed in front of assets that CLIENT NAME considers to be 'business critical' or containing sensitive or valuable data (e.g., financial information or medical formulas). CLIENT NAME has enterprise security firewalls in place at the perimeter of the corporate network. These appliances provide advanced protection against malicious activities, content filtering and intrusion detection.",

      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('assets', [{      
      asset_categoryId: 5,
      title:"Information System (IS) Staff",
      description:"The information Systems department is comprised of multiple individuals or group (depending on the size of the organization), each of which have their respective responsibilities to ensure the confidentiality, integrity, and availability of CLIENT NAME's data, services and other IT assets. Information System staff is comprised of the following goups/individuals: 1- Business Inteligence - Responsible for strategic technology development / change management, etc. 2- Information Security - Responsible for day-to-day security operations, securing CLIENT NAME's IT assets and providing support related to IT infrastructure ",

      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('assets', [{      
      asset_categoryId: 6,
      title:"CLIENT NAME's Reputation and Customer Trust",
      description:"This asset refers to the confidence of customers.  In the event of a breach of customer data (e.g., personal information), product recalls, or confidential information is leaked affecting the reputation of CLIENT NAME, the impact is rated as Medium.In the event customer orders have been delayed, the injury would be rated as very low.",

      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("assets", null, {});
  }
}