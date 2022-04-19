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
        include: [
                    {
                      model: db.Asset,
                      include: [
                                  {
                                    model: db.AssetCategory, attributes: ['id','name']
                                  },
                                  {
                                    model: db.Vulnerability, 
                                    include: [{model: db.Threat, attributes: ['id','category','agent','title', 'description']}],
                                    attributes: ['id','category','title', 'description']
                                  }
                                  
                                ],
                      attributes: ['id','categoryId','title', 'description']
                    }, 
                    {
                      model: db.Company,
                      attributes: ['id','name']
                    }
                  ]
        
        // include: { all: true, nested: true }
      })
        return assets;      
    }   
    
}