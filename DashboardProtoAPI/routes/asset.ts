import express from 'express'
import  {AssetRepository as Asset} from '../Infrastructure/repositories/AssetRepository'
export class AssetApi{
    private _asset:any;
    constructor(){
        this._asset = new Asset();
    }
    
    async getAllAssets(req: express.Request, res: express.Response){
      let assetList = await this._asset.Get();
      return  res.status(200).json(assetList);
    };

    async getAssetsById(req: express.Request, res: express.Response){
      // let assetId = req.body;
      // console.log(assetId)
      // let asset = await this._asset.GetById(assetId);
      // return  res.status(200).json(asset);
    };
}