import express from 'express'
import  {ThreatRepository } from '../Infrastructure/repositories/ThreatRepository'
import { ThreatDto } from '../domain/dtos/ThreatDto'
import {toEntity} from '../application/mappers/ThreatMapper'

export class ThreatApi{
    private _threatRepository:any;

    constructor(){    
        this._threatRepository = new ThreatRepository();
    }
    
    async getAllThreats(req: express.Request, res: express.Response){
      let threatList = await this._threatRepository.Get();
      // console.log("Helllllo")
      return  res.status(200).json(threatList);
    };

    async getThreatById(req: express.Request, res: express.Response){
      let threatId = req.params.id;
      console.log(threatId)
      let threat = await this._threatRepository.GetById(threatId);
      return  res.status(200).json(threat);
    };

    async create(req: express.Request, res: express.Response){
        
      const { title} = req.body;
     
      const alreadyExistsThreat = await this._threatRepository.GetByTitle(title)
      .catch(
      (err) => {
          console.log("Error: ", err);
      }
      );
      if (alreadyExistsThreat) {
        return res.status(409).json({ message: "this Threat already exist!" });
      } else {
        const threatDto = this.getDtoFromRequest(req); 
        let createdThreat = await this._threatRepository.Create(toEntity(threatDto))       
        if(createdThreat){
            return res.status(201).json(createdThreat);
        }else{
            return res.status(400).send("The vulnerability could not be created. Please check the provided data.")
        }
      }
      
  }

  async update(req: express.Request, res: express.Response){ 
    const id = req.params.id;
    const exists = await this._threatRepository.GetById(id)
    .catch((err) => {
        console.log("Error: ", err);
    });
    if (exists) {
      const threatDto = this.getDtoFromRequest(req);      
      let updatedthreat = await this._threatRepository.Update(toEntity(threatDto), id)
    
      if(updatedthreat){
        updatedthreat = await this._threatRepository.GetById(id)
        return res.status(201).json(updatedthreat);
      }else{
        return res.status(400).send("The threat could not be updated. Please check the provided data.")
      }
    } else {
      return res.status(400).send("This threat doesn't exist. Please check the threat.")
    }
    
  }
  // Delete Threat 
async delete(req: express.Request, res: express.Response){
  let threatId = req.params.id;
   let existingThreat = await this._threatRepository.GetById(threatId);
  if (existingThreat){
  
    let updatedThreat = await this._threatRepository.delete(existingThreat)
   
 
      return res.status(200).send( `The threat with Id ${threatId} deleted  successfully..!`)
      
    
  } else{
      return res.status(404).send("This threat does not exist.")
  }
}
    //#region private methods
    getDtoFromRequest(req: express.Request){
        
      return new ThreatDto(req.body.id, req.body.category,req.body.agent, req.body.title, req.body.description, req.body.impact, req.body.likelihood, req.body.rating, new Date());
  }
}