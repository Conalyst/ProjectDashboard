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

    public async getStatsForBar() {
      return db.Asset.findAll({
        attributes: [
          'categoryId', 
          [sequelize.fn('COUNT', sequelize.col('rating')), 'count'],
          'rating'
        ],
        group: ["categoryId", 'rating'],
        raw: true,

      });

    }

    public async GetHigh(model: Model<typeof Asset>) {
      return db.Asset.findAll({
        attributes: [
        
          [sequelize.fn('COUNT', sequelize.col('id')), 'high_Asset'],
       
        ],
        where: {rating: 'H'}
      });
      
    }

    public async GetMedium(model: Model<typeof Asset>) {
      return db.Asset.findAll({
        attributes: [
        
          [sequelize.fn('COUNT', sequelize.col('id')), 'mediun_Asset'],
       
        ],
        where: {rating: 'M'}
      });
      
    }

    public async GetLow(model: Model<typeof Asset>) {
      return db.Asset.findAll({
        attributes: [
        
          [sequelize.fn('COUNT', sequelize.col('id')), 'low_Asset'],
       
        ],
        where: {rating: 'L'}
      });
      
    }


    public async GetHighConfidentiality(model: Model<typeof Asset>) {
      return db.Asset.findAll({
        attributes: [
        
          [sequelize.fn('COUNT', sequelize.col('id')), 'high_Asset'],
       
        ],
        where: {confidentiality: 'H'}
      });
      
    }

    public async GetMediumConfidentiality(model: Model<typeof Asset>) {
      return db.Asset.findAll({
        attributes: [
        
          [sequelize.fn('COUNT', sequelize.col('id')), 'mediun_Asset'],
       
        ],
        where: {confidentiality: 'M'}
      });
      
    }

    public async GetLowConfidentiality(model: Model<typeof Asset>) {
      return db.Asset.findAll({
        attributes: [
        
          [sequelize.fn('COUNT', sequelize.col('id')), 'low_Asset'],
       
        ],
        where: {confidentiality: 'L'}
      });
      
    }

    public async GetHighIntegrity(model: Model<typeof Asset>) {
      return db.Asset.findAll({
        attributes: [
        
          [sequelize.fn('COUNT', sequelize.col('id')), 'high_Asset'],
       
        ],
        where: {integrity: 'H'}
      });
      
    }

    public async GetMediumIntegrity(model: Model<typeof Asset>) {
      return db.Asset.findAll({
        attributes: [
        
          [sequelize.fn('COUNT', sequelize.col('id')), 'mediun_Asset'],
       
        ],
        where: {integrity: 'M'}
      });
      
    }

    public async GetLowIntegrity(model: Model<typeof Asset>) {
      return db.Asset.findAll({
        attributes: [
        
          [sequelize.fn('COUNT', sequelize.col('id')), 'low_Asset'],
       
        ],
        where: {integrity: 'L'}
      });
      
    }

    //Availability

    public async GetHighAvailability(model: Model<typeof Asset>) {
      return db.Asset.findAll({
        attributes: [
        
          [sequelize.fn('COUNT', sequelize.col('id')), 'high_Asset'],
       
        ],
        where: {availability: 'H'}
      });
      
    }

    public async GetMediumAvailability(model: Model<typeof Asset>) {
      return db.Asset.findAll({
        attributes: [
        
          [sequelize.fn('COUNT', sequelize.col('id')), 'mediun_Asset'],
       
        ],
        where: {availability: 'M'}
      });
      
    }

    public async GetLowAvailability(model: Model<typeof Asset>) {
      return db.Asset.findAll({
        attributes: [
        
          [sequelize.fn('COUNT', sequelize.col('id')), 'low_Asset'],
       
        ],
        where: {availability: 'L'}
      });
      
    }
    public async getAssetCategoryByName(id:number) {
      return db.AssetCategory.findByPk(id);
    
    }
}



