import { BaseRepository } from "../contracts/BaseRepository"
// import  {CompanyAssetEntity as Asset}  from "../db/models/ComanyAsset"
// import {AssetEntity} from '../db/models/Asset'

import db from '../db/models'

export class CompanyAssetsRepository {
    constructor(){
         
    }
  
    public async GetByCompanyId(companyId: number){
      let assets = await db.CompanyAsset.findAll({
        where: {companyId: `${companyId}`},
        include: [db.Asset, db.Company]
        // include: { all: true, nested: true }
      })
        return assets;      
    }   
    
}