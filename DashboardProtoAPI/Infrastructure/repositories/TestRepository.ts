import { BaseRepository } from "../contracts/BaseRepository"
// import  {TestEntity as Entity, TestEntity}  from "../db/models/Test"
import { Model } from "sequelize-typescript";
import db from '../db/models'
const Test = require("../db/models")
export class TestRepository {
    constructor(){
         
    }
    public async Get(){
        let dishs  = await db.Test.findAll();
        return dishs;
    }   
    public async Create(model: Model<typeof Test>){
        return db.Test.create(model['dataValues']);
    }
}
