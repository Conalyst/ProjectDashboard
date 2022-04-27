import { BaseRepository } from "../contracts/BaseRepository"
import { Model } from "sequelize-typescript";
import db from '../db/models'
import { Sequelize } from "sequelize";
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

    public async assetTocalcRisk(riskId: number) {
      const result = db.RiskAsset.findAll({
        where: {riskId: `${riskId}`},
        include: {model: db.Asset, attributes: ['id', 'rating']},
         attributes: ['id'],
         order: [[db.Asset,'indexRating', 'DESC']],
         raw: true
      })
      return result;
    }

    public async vulnTocalcRisk(riskId: number) {
      const result = db.RiskAsset.findAll({
        where: {riskId: `${riskId}`},
        include: [
                    {model: db.Asset, attributes: ['id', 'rating'], include: [
                      {model: db.Vulnerability, attributes: ['id', 'rating', 'indexRating'], through: {attributes: []}}
                    ]                
                    },                  
                  ],
          attributes: ["id"],
          order: [[db.Asset, { model: db.Vulnerability},'indexRating', 'DESC']],
          raw: true
      })
      
      return result;
    }

    public async threatTocalcRisk(riskId: number) {
      const result = db.RiskAsset.findAll({
        where: {riskId: `${riskId}`},
        include: [
                    {model: db.Asset, attributes: ['id', 'rating'], include: [
                      {model: db.Vulnerability, attributes: ['id', 'rating'], through: {attributes: []},
                       include: [ {model: db.Threat, attributes: ['id', 'rating', 'indexRating'], through: {attributes: []}} ]}
                    ]                
                    },                  
                  ],
          attributes: ["id"],
          order: [[db.Asset, db.Vulnerability, { model: db.Threat},'indexRating', 'DESC']],
          raw: true  
      })
      return result;
    }
}