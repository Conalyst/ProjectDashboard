'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('assets', [{      
      categoryId: 1,
      title:"Microsoft Office",
      description:"Microsoft Office is an office suite of desktop applications, servers and services for the Microsoft Windows and Mac operating systems. It includes Microsoft Word, Excel, PowerPoint, Outlook and OneNote. Microsoft Office is standard on all KU-owned workstations for faculty and staff. This asset includes M365 with locally stored documents. ",
      confidentiality:"L",
      integrity:"L",
      availability:"L",
      rating:"L",  
      indexRating:"1",    
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('assets', [{      
      categoryId: 1,
      title:"Machine & System Accounts, e.g., Active Directory ",
      description:"Virtual representation of Windows systems held in the Microsoft Active Directory Service. Microsoft Active Directory is used to manage CLIENT NAME's control policies and processes. ",
      confidentiality:"L",
      integrity:"M",
      availability:"H",
      rating:"M",  
      indexRating:"2",    
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('assets', [{      
      categoryId: 2,
      title:"File Server - User Data",
      description:"This asset represents a server which holds and controls access to separately stored files, as part of a multiuser system.",  
      confidentiality:"M",
      integrity:"L",
      availability:"L",
      rating:"H", 
      indexRating:"3",     
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('assets', [{      
      categoryId: 2,
      title:"Backup Procedures",
      description:"This asset refers to proceedures related to document backup.CLIENT NAME has Standard Operating Procedures which outlines the details for scheduling backups and backup recovery.",
      confidentiality:"H",
      integrity:"L",
      availability:"M",
      rating:"M", 
      indexRating:"2",     
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('assets', [{      
      categoryId: 3,
      title:"Account Password",
      description:"A secret that should be know to an individual or system to control access to a system.",
      confidentiality:"L",
      integrity:"M",
      availability:"H",
      rating:"H", 
      indexRating:"3",     
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('assets', [{      
      categoryId: 3,
      title:"Domain Controllers",
      description:"A domain controller is a server that responds to authentication requests and verifies users on computer networks.",
      confidentiality:"L",
      integrity:"L",
      availability:"L",
      rating:"L",    
      indexRating:"1",  
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('assets', [{      
      categoryId: 4,
      title:"Security Devices (Corporate Network) Firewall",
      description:"This asset speaks to firewalls that are logically placed in front of assets that CLIENT NAME considers to be 'business critical' or containing sensitive or valuable data (e.g., financial information or medical formulas). CLIENT NAME has enterprise security firewalls in place at the perimeter of the corporate network. These appliances provide advanced protection against malicious activities, content filtering and intrusion detection.",
      confidentiality:"M",
      integrity:"L",
      availability:"L",
      rating:"M",  
      indexRating:"2",    
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('assets', [{      
      categoryId: 5,
      title:"Information System (IS) Staff",
      description:"The information Systems department is comprised of multiple individuals or group (depending on the size of the organization), each of which have their respective responsibilities to ensure the confidentiality, integrity, and availability of CLIENT NAME's data, services and other IT assets. Information System staff is comprised of the following goups/individuals: 1- Business Inteligence - Responsible for strategic technology development / change management, etc. 2- Information Security - Responsible for day-to-day security operations, securing CLIENT NAME's IT assets and providing support related to IT infrastructure ",
      confidentiality:"L",
      integrity:"H",
      availability:"L",
      rating:"L",     
      indexRating:"1", 
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('assets', [{      
      categoryId: 6,
      title:"CLIENT NAME's Reputation and Customer Trust",
      description:"This asset refers to the confidence of customers.  In the event of a breach of customer data (e.g., personal information), product recalls, or confidential information is leaked affecting the reputation of CLIENT NAME, the impact is rated as Medium.In the event customer orders have been delayed, the injury would be rated as very low.",
      confidentiality:"L",
      integrity:"L",
      availability:"L",
      rating:"L",    
      indexRating:"1",        
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("assets", null, {});
  }
}