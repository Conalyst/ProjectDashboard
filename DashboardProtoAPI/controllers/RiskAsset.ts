import express from 'express'
import  { RiskAssetRepository } from '../Infrastructure/repositories/RiskAssetRepository'
import { RiskAssetDto } from '../domain/dtos/RiskAssetDto'
import {toEntity} from '../application/mappers/RiskAssetMapper'

export class RiskAssetApi{
    private _riskAssetRepository:any;
    constructor(){
        this._riskAssetRepository = new RiskAssetRepository();
    }

    async getByRiskId(req: express.Request, res: express.Response){
      let riskId = req.params.id;
      // console.log(Vulnerability)
      let risks = await this._riskAssetRepository.GetByRiskId(riskId);
      return  res.status(200).json(risks);
    };

    async getByAssetId(req: express.Request, res: express.Response){
      let assetId = req.params.id;
      let assets = await this._riskAssetRepository.GetByAssetId(assetId);
      return  res.status(200).json(assets);
    };

    async create(req: express.Request, res: express.Response){
        
      const assetId = req.query.assetId;
      const riskId = req.query.riskId;     
 
      const alreadyExists = await this._riskAssetRepository.GetByRisksAssetIds(riskId, assetId)     
      .catch(
        (err) => {
            console.log("Error: ", err);
        }
      );

      if (alreadyExists) {
        return res.status(409).json({ message: "this Risk-Asset already exist!" });
      } else {
        const riskAssetDto = this.getDtoFromRequest(req);       
        let createdRiskAsset = await this._riskAssetRepository.Create(toEntity(riskAssetDto))       
        if(createdRiskAsset) {
            return res.status(201).json(createdRiskAsset);
        } else {
            return res.status(400).send("The Risk-Asset could not be created. Please check the provided data.")
        }
      }      
  }

  getDtoFromRequest(req: express.Request){        
    return new RiskAssetDto(req.body.id,req.body.assetId,req.body.assetId, new Date());
  }
}