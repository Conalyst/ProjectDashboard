import express from 'express'
import  {ThreatRepository } from '../Infrastructure/repositories/ThreatRepository'
import { ThreatDto } from '../domain/dtos/ThreatDto'
import {toEntity} from '../application/mappers/ThreatMapper'

export class ThreatApi{
    private _ThreatRepository:any;

    constructor(){    
        this._ThreatRepository = new ThreatRepository();
    }
    
    async getAllThreats(req: express.Request, res: express.Response){
      let threatList = await this._ThreatRepository.Get();
      // console.log("Helllllo")
      return  res.status(200).json(threatList);
    };

    async getThreatById(req: express.Request, res: express.Response){
      let threatId = req.params.id;
      console.log(threatId)
      let threat = await this._ThreatRepository.GetById(threatId);
      return  res.status(200).json(threat);
    };

    async create(req: express.Request, res: express.Response){
        
      const { title} = req.body;
     
      const alreadyExistsThreat = await this._ThreatRepository.GetThreatByTitle(title)
      .catch(
      (err) => {
          console.log("Error: ", err);
      }
      );
      if (alreadyExistsThreat) {
      return res.status(409).json({ message: "this Threat already exist!" });
      }else{
        const threatDto = this.getDtoFromRequest(req);
        
        let createdThreat = await this._ThreatRepository.Create(toEntity(threatDto))
       
      if(createdThreat){
          return res.status(201).json(createdThreat);
      }else{
          return res.status(400).send("The vulnerability could not be created. Please check the provided data.")
      }
      }
      
  }
    //#region private methods
    getDtoFromRequest(req: express.Request){
        
      return new ThreatDto(req.body.id, req.body.category,req.body.agent, req.body.title, req.body.description, req.body.impact, req.body.likelihood, req.body.rating, new Date());
  }
}