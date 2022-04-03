import { BaseRepository } from "../contracts/BaseRepository"
  // import   Asset  from "../db/models"
// import   AssetOutput  from "../db/models"
// import  AssetCategory  from "../db/models";

import db from '../db/models'


export class AssetRepository {
    constructor(){
         
    }
    public async Get(){
        let assets  = await db.Asset.findAll({
           include: [db.AssetCategory]
        });
        return assets;
    }   
    public async GetById(id:number){
      return db.Asset.findByPk(id);
      
    }   
    public async GetByCompanyId(id:number){
      return db.Asset.findByPk(id);
      
    }   
    
}