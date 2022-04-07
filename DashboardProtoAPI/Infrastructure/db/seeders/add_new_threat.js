'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('threats', [{      
      category: "Accidental",
      agent: "CLIENT NAME's Staff",
      title:"Electronic Communication Mishandling",
      description:"There is a threat of data leakage if an email is distributed or handed without proper care of due diligence, e.g., non encrypted email attachments.  ",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('threats', [{      
      category: "Accidental",
      agent: "System dependencies ",
      title:"Dependency System Outage",
      description:"There is a risk of multiple system outage, because of the system dependencies due to cyberattack. ",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('threats', [{      
      category: "Deliberate",
      agent: "Sophisticated Cyber Criminals Organized Criminals ",
      title:"Phishing (Sophisticated)",
      description:"A targeted e-mail containing information relevant to CLIENT NAME staff or contractor (e.g., 'Spear Phishing') successfully exploits the trust of the person in order to obtain their account credentials or deliver malware or ransomware.",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('threats', [{      
      category: "Deliberate",
      agent: "Cyber Criminals ",
      title:"Ransomware",
      description:"An adversary gains administrative access to CLIENT NAME's system(s) and disables their function or encrypts key data, then demands payment to restore services. ",  
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('threats', [{      
      category: "Deliberate",
      agent: "Cyber Criminals",
      title:"Phishing (Unsophisticated)",
      description:"FUnlike Sophisticated phishing, this threat relates to a generic phishing e-mail successfully compromising CLIENT NAME's account credentials, or delivering malware or ransomware. A generic, non-targeted phishing e-mail sent to a number of employs successfully compromises employee or contractor account credentials or delivers malware or ransomware.",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('threats', [{      
      category: "Deliberate",
      agent: "Cyber Criminal",
      title:"Hacker Exploits Vulnerabilities ",
      description:"A hacker (cybercriminal) successfully exploits technical vulnerabilities in CLIENT NAME's network or devices to gain unauthorized access to CLIENT NAME's systems or services, sensitive information, or escalate privileges in order to gain further privileged access. ",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('threats', [{      
      category: "Deliberate",
      agent: "Contractors and CLIENT NAME's Employee",
      title:"Privileged Access Abuse (Administrator) ",
      description:"A CLIENT NAME employee with privileged or administrative access abuses, modify or destroy large volumes of data or formulas, or lock users out of systems or bring entire systems offline.  ",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('threats', [{      
      category: "Deliberate",
      agent: "Cyber Criminal",
      title:"Malware ",
      description:"Malware is successfully delivered to CLIENT NAME's systems which results in system outage, data exfiltration or performance problem.  ",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('threats', [{      
      category: "Deliberate",
      agent: "Sophisticated Cyber Criminals Organized Criminals ",
      title:"Distributed Denial of Service (DDoS)",
      description:"A large number of automated processes make requests to CLIENT NAME's web services simultaneously, overwhelming the web server or the on-premises back-end systems, causing failures or making performance unacceptable. ",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("threats", null, {});
  }
}