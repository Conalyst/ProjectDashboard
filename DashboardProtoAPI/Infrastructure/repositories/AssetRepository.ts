import { BaseRepository } from "../contracts/BaseRepository"
import { Model } from "sequelize-typescript";
import db from '../db/models'
import sequelize from "sequelize";
const Asset = require("../db/models")

export class AssetRepository {
    constructor(){
         
    }
    public async GetAssets(){
      let assets  = await db.Asset.findAll({
          include: [
                    {model:db.AssetCategory, attributes: ['id', 'name']}, 
                    {
                      model: db.Vulnerability,
                      include: [{model: db.Threat, attributes: ['id','category', 'agent','title', 'description']}],
                      attributes: ['id','category','title', 'description']
                    }
                   ]
      });
      return assets;
  }   
    public async Get(){
        let assets  = await db.Asset.findAll({
            include: [
                      {model:db.AssetCategory, attributes: ['id', 'name']}, 
                      {
                        model: db.Vulnerability,
                        include: [{model: db.Threat, attributes: ['id','category', 'agent','title', 'description']}],
                        attributes: ['id','category','title', 'description']
                      }
                     ],
                    //  order: [['rating', 'ASC']],
                    //  attributes: ['id', 'rating']
        });
        return assets;
    }   

    async GetAssetById(id: number) {

      const asset = await db.Asset.findOne({
           where: {id: `${id}`},
           include: [
            {model:db.AssetCategory, attributes: ['id', 'name']}, 
            {
              model: db.Vulnerability,
              include: [{model: db.Threat, attributes: ['id','category', 'agent','title', 'description']}],
              attributes: ['id','category','title', 'description']
            }
           ]
      })
      return asset;
    }

    public async GetById(id:number){
      return db.Asset.findByPk(id);
      
    }   

    async GetByTitle(title: string){

      const Asset = await db.Asset.findOne({
           where: {title: `${title}`}
       })
       return Asset;
    } 
    
    public async Create(model: Model<typeof Asset>){
      return db.Asset.create(model['dataValues']);
    }

    public async Update(model: Model<typeof Asset>, id:number){
        return db.Asset.update(model['dataValues'], {where: {id: `${id}`}});
    }
    public async delete(model: Model<typeof Asset>, idAsset:number){
      return model.destroy();
    }

    
    public async GetTotal(model: Model<typeof Asset>) {
      return db.Asset.findAll({
        attributes: [
        
          [sequelize.fn('COUNT', sequelize.col('id')), 'total_Asset'],
       
        ]
      });
      
    }

    public async GetHigh(model: Model<typeof Asset>) {
      return db.Asset.findAll({
        attributes: [
        
          [sequelize.fn('COUNT', sequelize.col('id')), 'high_Asset'],
       
        ],
        where: {rating: 'High'}
      });
      
    }

    public async GetMedium(model: Model<typeof Asset>) {
      return db.Asset.findAll({
        attributes: [
        
          [sequelize.fn('COUNT', sequelize.col('id')), 'mediun_Asset'],
       
        ],
        where: {rating: 'Medium'}
      });
      
    }

    public async GetLow(model: Model<typeof Asset>) {
      return db.Asset.findAll({
        attributes: [
        
          [sequelize.fn('COUNT', sequelize.col('id')), 'low_Asset'],
       
        ],
        where: {rating: 'Low'}
      });
      
    }
    
}