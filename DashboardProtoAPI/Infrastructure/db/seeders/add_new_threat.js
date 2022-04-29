'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('threats', [{
      category: "Accidental",
      agent: "CLIENT's Staff",
      title:"Electronic Communication Mishandling",
      description:"There is a threat of data leakage if an email is distributed or handed without proper care of due diligence, e.g., non encrypted email attachments. ",
      impact:"M",
      likelihood:"H",
      rating:"L",
      indexRating: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('threats', [{
      category: "Accidental",
      agent: "System (Dependencies)",
      title:"Dependency System Outage",
      description:"There is a risk of multiple system outage, because of the system dependencies due to cyberattack. ",
      impact:"M",
      likelihood:"L",
      rating:"H",
      indexRating: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
   await queryInterface.bulkInsert('threats', [{
     category: "Deliberate",
     agent: "Competitor",
     title:"Phishing (Sophisticated)",
     description:"A targeted e-mail containing information relevant to CLIENT staff or contractor (e.g., 'Spear Phishing') successfully exploits the trust of the person in order to obtain their account credentials to access and steal data.",
      impact:"H",
      likelihood:"M",
      rating:"L",
      indexRating: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('threats', [{
      category: "Deliberate",
      agent: "Cyber Criminal",
      title:"Ransomware",
      description:"An adversary gains administrative access to CLIENT NAME's system(s) and disables their function or encrypts key data, then demands payment to restore services. ",
      impact:"L",
      likelihood:"M",
      rating:"M",
      indexRating: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});    await queryInterface.bulkInsert('threats', [{
      category: "Deliberate",
      agent: "Cyber Criminal",
      title:"Phishing (Unsophisticated)",
      description:"FUnlike Sophisticated phishing, this threat relates to a generic phishing e-mail successfully compromising CLIENT NAME's account credentials, or delivering malware or ransomware. A generic, non-targeted phishing e-mail sent to a number of employs successfully compromises employee or contractor account credentials or delivers malware or ransomware.",
      impact:"M",
      likelihood:"H",
      rating:"L",
      indexRating: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('threats', [{
      category: "Deliberate",
      agent: "Cyber Criminal",
      title:"Hacker Exploits Vulnerabilities ",
      description:"A hacker (cybercriminal) successfully exploits technical vulnerabilities in CLIENT NAME's network or devices to gain unauthorized access to CLIENT NAME's systems or services, sensitive information, or escalate privileges in order to gain further privileged access. ",
      impact:"H",
      likelihood:"M",
      rating:"H",
      indexRating: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('threats', [{
      category: "Deliberate",
      agent: "CLIENT's Staff",
      title:"Privileged Access Abuse (Administrator) ",
      description:"A CLIENT NAME employee with privileged or administrative access abuses, modify or destroy large volumes of data or formulas, or lock users out of systems or bring entire systems offline. ",
      impact:"L",
      likelihood:"L",
      rating:"L",
      indexRating: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('threats', [{
      category: "Deliberate",
      agent: "Cyber Criminal",
      title:"Malware ",
      description:"Malware is successfully delivered to CLIENT NAME's systems which results in system outage, data exfiltration or performance problem. ",
      impact:"H",
      likelihood:"H",
      rating:"M",
      indexRating: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('threats', [{
      category: "Deliberate",
      agent: "Organized Cyber Criminals",
      title:"Distributed Denial of Service (DDoS)",
      description:"A large number of automated processes make requests to CLIENT NAME's web services simultaneously, overwhelming the web server or the on-premises back-end systems, causing failures or making performance unacceptable. ",
      impact:"H",
      likelihood:"M",
      rating:"H",
      indexRating: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("threats", null, {});
  }
}