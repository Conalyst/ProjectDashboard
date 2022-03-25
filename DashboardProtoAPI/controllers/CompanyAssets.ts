import express from 'express'
import  {CompanyAssetsRepository as Assets} from '../Infrastructure/repositories/CompanyAssetsRepository'

export class CompanyAssetsApi{
    private _asset:any;
    constructor(){
        this._asset = new Assets();
    }

    async getAssetsByCompanyId(req: express.Request, res: express.Response){
      let companyId = req.params.id;
      console.log(companyId)
      let assets = await this._asset.GetByCompanyId(companyId);
      return  res.status(200).json(assets);
    };
}