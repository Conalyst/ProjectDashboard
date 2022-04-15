import { BaseRepository } from "../contracts/BaseRepository"
import { Model } from "sequelize-typescript";
import db from '../db/models'
const Risk = require("../db/models")

export class RiskRepository {
    constructor(){
         
    }
  
    public async Get(){
      let risks  = await db.Risk.findAll();
      return risks;
    }  

    public async GetById(id:number){
      return db.Risk.findByPk(id);    
    }   
    
    async GetByTitle(title: string){

      const Risk = await db.Risk.findOne({
           where: {title: `${title}`}
       })
       return Risk;
    } 
    
    public async Create(model: Model<typeof Risk>){
      return db.Risk.create(model['dataValues']);
    }

    public async Update(model: Model<typeof Risk>, id:number){
      return db.Risk.update(model['dataValues'], {where: {id: `${id}`}});
  }
}