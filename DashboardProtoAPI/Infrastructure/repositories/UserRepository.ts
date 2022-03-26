import { Model } from "sequelize-typescript";
import { BaseRepository } from "../contracts/BaseRepository"
// import User from '../db/models'
import db from '../db/models'
const User = require("../db/models")

export class UserRepository {
    constructor(){
         
    }
    public async Get(){
        let users  = await db.User.findAll();
        return users;
    }   
    async GetUserByemail(email: string){

        const User = await db.User.findOne({
             where: {email: `${email}`}
         })
         return User;
     }
    public async Create(model: Model<typeof User>){
        return db.User.create(model['dataValues']);
    }
}
