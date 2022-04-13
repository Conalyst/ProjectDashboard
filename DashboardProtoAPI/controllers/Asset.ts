import express from 'express'
import  {AssetRepository } from '../Infrastructure/repositories/AssetRepository'
import { AssetDto } from '../domain/dtos/AssetDto'
import {toEntity} from '../application/mappers/assetMapper'

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
      let asset = await this._assetRepository.GetAssetById(assetId);
      return  res.status(200).json(asset);
    };


     //endpoint create Asset
     async create(req: express.Request, res: express.Response){
        
      const { title} = req.body;
     
      const alreadyExistsAsset = await this._assetRepository.GetAssetByTitle(title)
      .catch(
      (err) => {
          console.log("Error: ", err);
      }
      );
      if (alreadyExistsAsset) {
      return res.status(409).json({ message: "this Asset already exist!" });
      }else{
        const assetDto = this.getDtoFromRequest(req);
        
        let createdAsset = await this._assetRepository.Create(toEntity(assetDto))
       
      if(createdAsset){
          return res.status(201).json(createdAsset);
      }else{
          return res.status(400).send("The asset could not be created. Please check the provided data.")
      }
      }
      
  }

    //#region private methods
    getDtoFromRequest(req: express.Request){
        
      return new AssetDto(req.body.id, req.body.categoryId,req.body.title, req.body.description, req.body.confidentiality, req.body.integrity, req.body.availability, req.body.rating, new Date());
  }
 
  //#endregion
}