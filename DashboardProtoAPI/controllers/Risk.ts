import express from 'express'
import  {RiskRepository } from '../Infrastructure/repositories/RiskRepository'
import { RiskDto } from '../domain/dtos/RiskDto'
import {toEntity} from '../application/mappers/RiskMapper'

export class RiskApi{
    private _riskRepository:any;

    constructor(){    
        this._riskRepository = new RiskRepository();
    }
    
    async getAllRisks(req: express.Request, res: express.Response){
      let riskList = await this._riskRepository.Get();
      // console.log("Helllllo")
      return  res.status(200).json(riskList);
    };

    async getRiskById(req: express.Request, res: express.Response){
      let riskId = req.params.id;
      let risk = await this._riskRepository.GetById(riskId);
      return  res.status(200).json(risk);
    };

    async create(req: express.Request, res: express.Response){
        
      const { title } = req.body;
     
      const alreadyExistsRisk = await this._riskRepository.GetByTitle(title)
      .catch(
      (err) => {
          console.log("Error: ", err);
      }
      );
      if (alreadyExistsRisk) {
        return res.status(409).json({ message: "this Risk already exist!" });
      } else {
        const riskDto = this.getDtoFromRequest(req); 
        let createdRisk = await this._riskRepository.Create(toEntity(riskDto)) 
              
        if(createdRisk){
            return res.status(201).json(createdRisk);
        }else{
            return res.status(400).send("The Risk could not be created. Please check the provided data.")
        }
      }
      
  }
     //static Asset
     async getStaticRisks(req: express.Request, res: express.Response){
       
      let numberRisk = await this._riskRepository.GetTotal();
      let highRisk = await this._riskRepository.GetHigh();
      let mediumRisk = await this._riskRepository.GetMedium();
      let lowRisk = await this._riskRepository.GetLow();
      return  res.status(200).json({
        "static":{ numberRisk,highRisk,mediumRisk,lowRisk}});
    };  
  async update(req: express.Request, res: express.Response){ 
    const id = req.params.id;
    const exists = await this._riskRepository.GetById(id)
    .catch((err) => {
        console.log("Error: ", err);
    });
    if (exists) {
      const riskDto = this.getDtoFromRequest(req);      
      let updatedRisk = await this._riskRepository.Update(toEntity(riskDto), id)
    
      if(updatedRisk){
        updatedRisk = await this._riskRepository.GetById(id)
        return res.status(201).json(updatedRisk);
      }else{
        return res.status(400).send("The Risk could not be updated. Please check the provided data.")
      }
    } else {
      return res.status(400).send("This Risk doesn't exist. Please check the Risk.")
    }
    
  }
    //#region private methods
    getDtoFromRequest(req: express.Request){
        
      return new RiskDto(req.body.id, req.body.category, req.body.title, req.body.description, req.body.impact, req.body.likelihood, req.body.rating, new Date());
  }

  async updateRating(riskId: any, rating: any){ 
    const id = riskId;
    const exists = await this._riskRepository.GetById(id)
    .catch((err) => {
        console.log("Error: ", err);
    });
    if (exists) {
      exists.rating = rating;
      exists.UpdatedAt = new Date();     
      let updatedRating = await this._riskRepository.Update(exists)    
      if(updatedRating){
        return updatedRating
      }
    }
    return null;
  }
}