import express from 'express'
import  {ThreatRepository } from '../Infrastructure/repositories/ThreatRepository'

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
}