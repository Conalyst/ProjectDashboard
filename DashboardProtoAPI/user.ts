import express from 'express'
import  {UserRepository} from './Infrastructure/repositories/UserRepository'
import {toEntity} from './application/mappers/userMapper'
import { UserDto } from './domain/dtos/UserDto'
import bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
import { LoginRequestDto } from './domain/dtos/LoginRequestDto'
export class UserApi{
    private _userRepository:any;
    constructor(){
        this._userRepository = new UserRepository();
    }
    
    async getAll(req: express.Request, res: express.Response){
        let usersList = await this._userRepository.Get();
        return  res.status(200).json(usersList);
    };

    //endpoint create user
    async create(req: express.Request, res: express.Response){
        
        const { username, password , user_type} = req.body;
        

        const alreadyExistsUser = await this._userRepository.GetByUsername(username ).catch(
        (err) => {
            console.log("Error: ", err);
        }
        );
    
        if (alreadyExistsUser) {
        return res.status(409).json({ message: "User with this email already exists!" });
        }
        const userDto = this.getDtoFromRequest(req);
        const salt = await bcrypt.genSalt();
        userDto.Password = await bcrypt.hash(userDto.Password, salt)
        let createdUser = await this._userRepository.Create(toEntity(userDto))
        if(createdUser){
            return res.status(201).json(createdUser);
        }else{
            return res.status(400).send("The user could not be created. Please check the provided data.")
        }
    }
    async login(req: express.Request, res: express.Response){
        const loginDto = this.getLoginDtoFromRequest(req);
        let existingUser = await this._userRepository.GetByUsername(req.body.username)
        console.log(existingUser)
        if (!existingUser)
        return res
        .status(400)
        .json({ message: "Email or password does not match!" });

        if (existingUser.password !== loginDto.Password)
            return res
            .status(400)
            .json({ message: "Email or password does not match!" });

        const jwtToken = jwt.sign(
            { id: existingUser.id, email: existingUser.username },
            process.env.JWT_SECRET
        );

        res.json({ message: "Welcome Back!", token: jwtToken });
    }


    //#region private methods
    getDtoFromRequest(req: express.Request){
        
        return new UserDto(req.body.id, new Date(), req.body.username, req.body.password, req.body.user_type);
    }
    getLoginDtoFromRequest(req: express.Request){
        return new LoginRequestDto(req.body.username, req.body.password);
    }
    //#endregion
    // FORMAT OF TOKEN
    // Authorization: Bearer <access_token>

    // // Verify Token
    // async verifyToken(req: express.Request, res: express.Response, next: any) {
    //     // Get auth header value
    //     const bearerHeader = req.headers['authorization'];
    //     // Check if bearer is undefined
    //     if(typeof bearerHeader !== 'undefined') {
    //       // Split at the space
    //       const bearer = bearerHeader.split(' ');
    //       // Get token from array
    //       const bearerToken = bearer[1];
    //       jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET, (err: any,payload: any)=>{
    //           if (err){
    //               return next()
    //           }
    //           req.payload = payload
    //           next()
    //       })
    //     //   // Set the token
    //     //   req.token = bearerToken;
    //     //   // Next middleware
    //     //   next();
    //     } else {
    //     // Forbidden
    //     res.sendStatus(403);
    //     }
    //}

}
