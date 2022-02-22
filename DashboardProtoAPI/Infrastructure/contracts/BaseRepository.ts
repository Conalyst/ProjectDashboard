import {Sequelize, Model} from 'sequelize-typescript';

//The contract for defining repositories. Any new repository will have all the default implementations of the 
//above methods: Get, GetById, Update, Create and Delete
export abstract class BaseRepository<T>{
    private _model;
    constructor(model:any){
        this._model = model;
    }
    async Update(model: Model<T>){
        return model.save();
    }
    public async Create(model: Model<T>){
        return model.save();
    }
    async Delete(model: Model<T>){
        return model.destroy();
    }
}