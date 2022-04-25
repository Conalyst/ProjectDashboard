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

  async getCalculatedRisk(req: express.Request, res: express.Response){
    
    const riskId = req.params.id;
    const asset =  await this._riskAssetRepository.assetTocalcRisk(riskId)
    const vuln =  await this._riskAssetRepository.vulnTocalcRisk(riskId)
    const threat =  await this._riskAssetRepository.threatTocalcRisk(riskId)
    let highestAssetRating: any;
    let highestVulnRating: any;
    let highestThreatRating: any
    if (asset.length !== 0) {
      highestAssetRating = asset[0]['Asset.rating']
    }
    if (vuln.length !== 0) {
      highestVulnRating = vuln[0]['Asset.Vulnerabilities.rating']
    }
    if (threat.length !== 0) {
      highestThreatRating = threat[0]['Asset.Vulnerabilities.Threats.rating']
    }
    const risk = { highestAssetRating, highestVulnRating, highestThreatRating}
    const scores = { 'H': 4, 'M': 3, 'L': 2 }
    const riskScore = scores[risk.highestAssetRating] * scores[risk.highestVulnRating] * scores[risk.highestThreatRating]
    risk['score'] = riskScore
      return  res.status(200).json(risk);
  }

}