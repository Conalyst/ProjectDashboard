import { Model } from "sequelize-typescript";
import { BaseRepository } from "../contracts/BaseRepository"
import { UserEntity } from "../db/models/User";

export class UserRepository {
    constructor(){
         
    }
    public async Get(): Promise<UserEntity[]>{
        let users  = await UserEntity.findAll();
        return users;
    }   
    async GetUserByemail(email: string): Promise<UserEntity | null>{
        return  UserEntity.findOne({
             where: {email: `${email}`}
         })
     }
    public async Create(model: Model<UserEntity>){
        return model.save();
    }
}
