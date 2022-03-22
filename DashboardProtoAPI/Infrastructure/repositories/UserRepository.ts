import { Model } from "sequelize-typescript";
import { BaseRepository } from "../contracts/BaseRepository"
import { UserEntity } from "../db/models/user";

export class UserRepository {
    constructor(){
         
    }
    public async Get(): Promise<UserEntity[]>{
        let users  = await UserEntity.findAll();
        return users;
    }   
    async GetByUsername(unsername: string): Promise<UserEntity | null>{
        return  UserEntity.findOne({
             where: {username: `${unsername}`}
         })
     }
    public async Create(model: Model<UserEntity>){
        return model.save();
    }
}
