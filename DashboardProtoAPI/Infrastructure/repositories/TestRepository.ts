import { BaseRepository } from "../contracts/BaseRepository"
// import  {TestEntity as Entity, TestEntity}  from "../db/models/Test"
import db from '../db/models'

export class TestRepository {
    constructor(){
         
    }
    public async Get(){
        let dishs  = await db.Test.findAll();
        return dishs;
    }   
}
