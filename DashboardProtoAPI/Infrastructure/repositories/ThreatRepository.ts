import { BaseRepository } from "../contracts/BaseRepository"
// import  {CompanyAssetEntity as Asset}  from "../db/models/ComanyAsset"
// import {AssetEntity} from '../db/models/Asset'
 import sequelize from "sequelize";
//import {Sequelize} from "sequelize";
import { Model } from "sequelize-typescript";
import db from '../db/models'
import {Sequelize} from "sequelize";


const Threat = require("../db/models")

export class ThreatRepository {
    constructor(){
         
    }
  
    public async Get(){
      let threats  = await db.Threat.findAll();
      return threats;
    }  

  
    
    async GetByTitle(title: string){

      const threat = await db.Threat.findOne({
           where: {title: `${title}`}
       })
       return threat;
    } 
    
    public async Create(model: Model<typeof Threat>){
      return db.Threat.create(model['dataValues']);
    }

    public async Update(model: Model<typeof Threat>, id:number){
      return db.Threat.update(model['dataValues'], {where: {id: `${id}`}});
  }
  public async delete(model: Model<typeof Threat>, idThreat:number){
    return model.destroy();
  }

 
  public async GetByHighImpact(id:number){
    const threat = db.Threat.findAll({
      attributes: [
        
        [Sequelize.fn('DISTINCT', Sequelize.col('agent')), 'agent'],
        "impact"
      ],
        where: {impact: 'H'},
    })
    return threat;    
  }   
 
  public async GetTotal(model: Model<typeof Threat>) {
    return db.Threat.findAll({
      attributes: [
      
        [sequelize.fn('COUNT', sequelize.col('id')), 'total_Threat'],
     
      ]
    });
    
  }
  public async GetAgentByHighRating(model: Model<typeof Threat>) {
    return db.Threat.findAll({
      limit: 3,
      attributes: [
        [sequelize.fn('DISTINCT', sequelize.col('agent')), 'agent']
       
     
      ],
      where: {rating: 'H'}
    });
    
  }

  public async GetAgentByHighImpact(model: Model<typeof Threat>) {
    return db.Threat.findAll({
      limit: 3,
      attributes: [
        [sequelize.fn('DISTINCT', sequelize.col('agent')), 'agent']
      ],
      where: {impact: 'H'}
    });
    
  }
  

  public async GetAgentByHighLikelihood(model: Model<typeof Threat>) {
    return db.Threat.findAll({
      limit: 3,
      attributes: [
        [sequelize.fn('DISTINCT', sequelize.col('agent')), 'agent']
     
      ],
      where: {likelihood: 'H'}
    });
    
  }
  public async GetHigh(model: Model<typeof Threat>) {
    
    return db.Threat.findAll({
      attributes: [
      
        [sequelize.fn('COUNT', sequelize.col('id')), 'high_Threat'],
     
      ],
      where: {rating: 'H'}
    });
    
  }

  public async GetMedium(model: Model<typeof Threat>) {
    return db.Threat.findAll({
      attributes: [
      
        [sequelize.fn('COUNT', sequelize.col('id')), 'mediun_Threat'],
     
      ],
      where: {rating: 'M'}
    });
    
  }

  public async GetLow(model: Model<typeof Threat>) {
    return db.Threat.findAll({
      attributes: [
      
        [sequelize.fn('COUNT', sequelize.col('id')), 'low_Threat'],
     
      ],
      where: {rating: 'L'}
    });
    
  }
  


  //

  public async GetHighImpact(model: Model<typeof Threat>) {
    return db.Threat.findAll({
      attributes: [
      
        [sequelize.fn('COUNT', sequelize.col('id')), 'high_Threat'],
     
      ],
      where: {impact: 'H'}
    });
    
  }

  public async GetMediumImpact(model: Model<typeof Threat>) {
    return db.Threat.findAll({
      attributes: [
      
        [sequelize.fn('COUNT', sequelize.col('id')), 'mediun_Threat'],
     
      ],
      where: {impact: 'M'}
    });
    
  }

  public async GetLowImpact(model: Model<typeof Threat>) {
    return db.Threat.findAll({
      attributes: [
      
        [sequelize.fn('COUNT', sequelize.col('id')), 'low_Threat'],
     
      ],
      where: {impact: 'L'}
    });
    
  }
//Likelihood


public async GetHighLikelihood(model: Model<typeof Threat>) {
  return db.Threat.findAll({
    attributes: [
    
      [sequelize.fn('COUNT', sequelize.col('id')), 'high_Threat'],
   
    ],
    where: {likelihood: 'H'}
  });
  
}

public async GetMediumLikelihood(model: Model<typeof Threat>) {
  return db.Threat.findAll({
    attributes: [
    
      [sequelize.fn('COUNT', sequelize.col('id')), 'mediun_Threat'],
   
    ],
    where: {likelihood: 'M'}
  });
  
}

public async GetLowLikelihood(model: Model<typeof Threat>) {
  return db.Threat.findAll({
    attributes: [
    
      [sequelize.fn('COUNT', sequelize.col('id')), 'low_Threat'],
   
    ],
    where: {likelihood: 'L'}
  });
  
}
 
}