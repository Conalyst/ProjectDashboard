import { BaseRepository } from "../contracts/BaseRepository"
import { Model } from "sequelize-typescript";
  // import   Asset  from "../db/models"
// import   AssetOutput  from "../db/models"
// import  AssetCategory  from "../db/models";

import db from '../db/models'
const Asset = require("../db/models")

export class AssetRepository {
    constructor(){
         
    }
    public async Get(){
        let assets  = await db.Asset.findAll({
           include: [db.AssetCategory]
        });
        return assets;
    }   
    async GetAssetById(id: number){

      const Asset = await db.Asset.findOne({
           where: {id: `${id}`}
       })
       return Asset;
   }
    public async GetById(id:number){
      return db.Asset.findByPk(id);
      
    }   
    async GetAssetByTitle(title: string){

      const Asset = await db.Asset.findOne({
           where: {title: `${title}`}
       })
       return Asset;
   } 
    
    public async Create(model: Model<typeof Asset>){
      return db.Asset.create(model['dataValues']);
  }
}