import express from 'express'
import { TestDto } from '../domain/dtos/TestDto'
import {toEntity} from '../application/mappers/testMapper'
import  {TestRepository} from '../Infrastructure/repositories/TestRepository'
export class TestApi{
    private _testRepository:any;
    constructor(){
        this._testRepository = new TestRepository();
    }
    
    async getAll(req: express.Request, res: express.Response){
        let testsList = await this._testRepository.Get();
        return  res.status(200).json(testsList);
    };
    async create(req: express.Request, res: express.Response){
        console.log("in create ", req.body)
        const testDto = this.getDtoFromRequest(req);
        
        let createTest = await this._testRepository.Create(toEntity(testDto))
        if(createTest){
            console.log('comment created', createTest);
            return res.status(201).json(createTest);
        }else{
            return res.status(400).send("The comment could not be created. Please check the provided data.")
        }
    }

    getDtoFromRequest(req: express.Request){
        return new TestDto(req.body.id, 
        req.body.title, new Date());
    }
}
