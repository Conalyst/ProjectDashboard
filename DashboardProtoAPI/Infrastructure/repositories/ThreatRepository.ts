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

    public async GetById(id:number){
      return db.Threat.findByPk(id);    
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
      console.log("model..", model['dataValues'])
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
      where: {rating: 'High'}
    });
    
  }

  public async GetAgentByHighImpact(model: Model<typeof Threat>) {
    return db.Threat.findAll({
      limit: 3,
      attributes: [
        [sequelize.fn('DISTINCT', sequelize.col('agent')), 'agent']
      ],
      where: {impact: 'High'}
    });
    
  }

  public async GetAgentByHighLikelihood(model: Model<typeof Threat>) {
    return db.Threat.findAll({
      limit: 3,
      attributes: [
        [sequelize.fn('DISTINCT', sequelize.col('agent')), 'agent']
     
      ],
      where: {likelihood: 'High'}
    });
    
  }
  public async GetHigh(model: Model<typeof Threat>) {
    
    return db.Threat.findAll({
      attributes: [
      
        [sequelize.fn('COUNT', sequelize.col('id')), 'high_Threat'],
     
      ],
      where: {rating: 'High'}
    });
    
  }

  public async GetMedium(model: Model<typeof Threat>) {
    return db.Threat.findAll({
      attributes: [
      
        [sequelize.fn('COUNT', sequelize.col('id')), 'mediun_Threat'],
     
      ],
      where: {rating: 'Medium'}
    });
    
  }

  public async GetLow(model: Model<typeof Threat>) {
    return db.Threat.findAll({
      attributes: [
      
        [sequelize.fn('COUNT', sequelize.col('id')), 'low_Threat'],
     
      ],
      where: {rating: 'Low'}
    });
    
  }
  
 
}