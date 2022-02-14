import { BaseRepository } from "../contracts/BaseRepository"
import  {TestEntity as Entity, TestEntity}  from "../db/models/test"

export class TestRepository {
    constructor(){
         
    }
    public async Get(): Promise<TestEntity[]>{
        let dishs  = await TestEntity.findAll();
        return dishs;
    }   
}
