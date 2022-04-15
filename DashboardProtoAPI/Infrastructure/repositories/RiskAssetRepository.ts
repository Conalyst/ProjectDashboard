import { BaseRepository } from "../contracts/BaseRepository"
import { Model } from "sequelize-typescript";
import db from '../db/models'
const RiskAsset = require("../db/models")

export class RiskAssetRepository {
    constructor(){
         
    }

    public async GetByRiskId(riskId: number){
      let risks = await db.RiskAsset.findAll({
        where: {riskId: `${riskId}`},
      })
        return risks;      
    }   

    public async GetByAssetId(assetId: number){
      let assets = await db.RiskAsset.findAll({
        where: {assetId: `${assetId}`},
      })
        return assets;      
    }   
    
    public async GetByRisksAssetIds(riskId: number, assetId: number){
      let results = await db.AssetVulnerability.findOne({
        where: {riskId: `${riskId}` , assetId: `${assetId}`}
      })
        return results;      
    }   

    public async Create(model: Model<typeof RiskAsset>){
      return db.RiskAsset.create(model['dataValues']);
    }

}