import { BaseRepository } from "../contracts/BaseRepository"
// import  {CompanyAssetEntity as Asset}  from "../db/models/ComanyAsset"
// import {AssetEntity} from '../db/models/Asset'

import { Model } from "sequelize-typescript";
import db from '../db/models'
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
    
    async GetThreatByTitle(title: string){

      const threat = await db.Threat.findOne({
           where: {title: `${title}`}
       })
       return threat;
    } 
    
    public async Create(model: Model<typeof Threat>){
      return db.Threat.create(model['dataValues']);
    }
}