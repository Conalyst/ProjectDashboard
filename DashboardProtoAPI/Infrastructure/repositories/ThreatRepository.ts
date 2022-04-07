import { BaseRepository } from "../contracts/BaseRepository"
// import  {CompanyAssetEntity as Asset}  from "../db/models/ComanyAsset"
// import {AssetEntity} from '../db/models/Asset'

import db from '../db/models'

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
    
}