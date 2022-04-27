import express from 'express'
import  {AssetRepository } from '../Infrastructure/repositories/AssetRepository'
import { AssetDto } from '../domain/dtos/AssetDto'
import {toEntity} from '../application/mappers/assetMapper'
import { type } from 'os';

export class AssetApi{

  private _assetRepository:any;
    constructor(){
        this._assetRepository  = new AssetRepository();
    }
    
    async getAllAssets(req: express.Request, res: express.Response){
      let assetList = await this._assetRepository.Get();
      return  res.status(200).json(assetList);
    };
    async getAssets(req: express.Request, res: express.Response){
      let assetList = await this._assetRepository.Get();
      return  res.status(200).json(assetList);
    };
    

    async getAssetsById(req: express.Request, res: express.Response){
      let assetId = req.params.id;
      console.log(assetId)
      let asset = await this._assetRepository.GetAssetById(assetId);
      return  res.status(200).json(asset);
    };
 
   

      //static Asset
      async getStaticAssets(req: express.Request, res: express.Response){
        let numberAsset = await this._assetRepository.GetTotal();
        let highAsset = await this._assetRepository.GetHigh();
        let mediumAsset = await this._assetRepository.GetMedium();
        let lowAsset = await this._assetRepository.GetLow();
        let highAssetConfidentiality = await this._assetRepository.GetHighConfidentiality();
        let mediumAssetConfidentiality = await this._assetRepository.GetMediumConfidentiality();
        let lowAssetConfidentiality = await this._assetRepository.GetLowConfidentiality();
        let highAssetIntegrity = await this._assetRepository.GetHighIntegrity();
        let mediumAssetIntegrity = await this._assetRepository.GetMediumIntegrity();
        let lowAssetIntegrity = await this._assetRepository.GetLowIntegrity();
        let highAssetAvailability = await this._assetRepository.GetHighAvailability();
        let mediumAssetAvailability = await this._assetRepository.GetMediumAvailability();
        let lowAssetAvailability = await this._assetRepository.GetLowAvailability();
        return  res.status(200).json({
          "static":{highAsset,numberAsset,mediumAsset,lowAsset},
        "visual":{
          "highAssetConfidentiality":highAssetConfidentiality,
          "mediumAssetConfidentiality":mediumAssetConfidentiality,
          "lowAssetConfidentiality":lowAssetConfidentiality,
          "highAssetIntegrity":highAssetIntegrity,
          "mediumAssetIntegrity":mediumAssetIntegrity,
          "lowAssetIntegrity":lowAssetIntegrity,
          "highAssetAvailability":highAssetAvailability,
          "mediumAssetAvailability":mediumAssetAvailability,
          "lowAssetAvailability":lowAssetAvailability

        }});
      };
     
 


     //endpoint create Asset
     async create(req: express.Request, res: express.Response){
     
      const { title} = req.body;     
      const alreadyExistsAsset = await this._assetRepository.GetByTitle(title)
      .catch(
        (err) => {
            console.log("Error: ", err);
        }
      );

      if (alreadyExistsAsset) {
        return res.status(409).json({ message: "this Asset already exist!" });
        
      } else {
       
        const assetDto = this.getDtoFromRequest(req);      
        let createdAsset = await this._assetRepository.Create(toEntity(assetDto)) 
       
        if(createdAsset) {
            return res.status(201).json(createdAsset);
        } else {
            return res.status(400).send("The asset could not be created. Please check the provided data.")
        }
      }
      
  }

  async update(req: express.Request, res: express.Response){
        
    const id = req.params.id;
    const exists = await this._assetRepository.GetById(id)
    .catch(
      (err) => {
          console.log("Error: ", err);
      }
    );

    if (exists) {
      const assetDto = this.getDtoFromRequest(req);
     
      let updatedAsset = await this._assetRepository.Update(toEntity(assetDto), id)
    
      if(updatedAsset){
        console.log("updated..", updatedAsset)
        updatedAsset = await this._assetRepository.GetById(id)
        return res.status(201).json(updatedAsset);
      }else{
        return res.status(400).send("The asset could not be updated. Please check the provided data.")
      }
    } else {
      return res.status(400).send("This asset doesn't exist. Please check the asset.")
    }
    
  }

  // Delete Asset 
async delete(req: express.Request, res: express.Response){
  let assetId = req.params.id;
   let existingAsset = await this._assetRepository.GetById(assetId);
  if (existingAsset){
  
    let updatedAsset = await this._assetRepository.delete(existingAsset)
   
 
      return res.status(200).send( `The asset with Id ${assetId} deleted  successfully..!`)
      
    
  } else{
      return res.status(404).send("This asset does not exist.")
  }
}
    //#region private methods
  getDtoFromRequest(req: express.Request){  
    let ratingAsset: any ;
    if (req.body.rating == "H")    {
          
      ratingAsset= 3;
   }  else if (req.body.rating == "M"){
     ratingAsset  = 2;
   } else if (req.body.rating == "L"){
     ratingAsset= 1;
   }   
       
    return new AssetDto(req.body.id, req.body.categoryId,req.body.title, req.body.description, req.body.confidentiality, req.body.integrity, req.body.availability, req.body.rating,ratingAsset, new Date());
  }
 
  async getStatsForBarChart(req: express.Request, res: express.Response){
    let assets = await this._assetRepository.getStatsForBar();
    const category = await this._assetRepository.getAssetCategoryByName(assets[0].categoryId);
    let stats = [{"categoryId": assets[0].categoryId, "Group": category.name}]
    let flag: any;
    for (let asset of assets) {
      const category = await this._assetRepository.getAssetCategoryByName(asset.categoryId);
      for(let stat of stats) {
        if(stat["categoryId"] === asset.categoryId) {
          stat[asset.rating] = parseInt(asset.count)
          flag = true
          break
        } else {
            flag = false;
        }
      }
      if(!flag){
        let temp:any = {};
        temp["categoryId"] = asset.categoryId
        temp["Group"] = category.name  
        temp[asset.rating] = parseInt(asset.count)                 
        stats.push(temp)
      }
    }
    let result:any = []
    for (let stat of stats) {
      let tempStat = {}
      tempStat["group"] = stat.Group;
      if (stat.hasOwnProperty("L")) {
        tempStat["L"] = stat["L"]
      } else {
        tempStat["L"] = 0
      }
      if (stat.hasOwnProperty("H")) {
        tempStat["H"] = stat["H"]
      } else {
        tempStat["H"] = 0
      }
      if (stat.hasOwnProperty("M")) {
        tempStat["M"] = stat["M"]
      } else {
        tempStat["M"] = 0
      }
      result.push(tempStat)
    }
    // console.log("stats..", )
    return  res.status(200).json(result);
  };
  //#endregion
}