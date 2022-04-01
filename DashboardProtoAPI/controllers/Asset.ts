import express from 'express'
import  {AssetRepository } from '../Infrastructure/repositories/AssetRepository'

export class AssetApi{
    private _assetRepository:any;
    constructor(){
        this._assetRepository  = new AssetRepository();
    }
    
    async getAllAssets(req: express.Request, res: express.Response){
      let assetList = await this._assetRepository.Get();
      console.log("Helllllo")
      return  res.status(200).json(assetList);
    };

    async getAssetsById(req: express.Request, res: express.Response){
      let assetId = req.params.id;
      console.log(assetId)
      let asset = await this._assetRepository.GetById(assetId);
      return  res.status(200).json(asset);
    };
}