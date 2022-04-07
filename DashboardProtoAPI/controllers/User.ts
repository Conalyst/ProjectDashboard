import express from "express";
import { UserRepository } from "../Infrastructure/repositories/UserRepository";
import { toEntity } from "../application/mappers/userMapper";
import { UserDto } from "../domain/dtos/UserDto";
import bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import { LoginRequestDto } from "../domain/dtos/LoginRequestDto";
export class UserApi {
  private _userRepository: any;
  constructor() {
    this._userRepository = new UserRepository();
  }

  async getAll(req: express.Request, res: express.Response) {
    let usersList = await this._userRepository.Get();
    return res.status(200).json(usersList);
  }
  
  //endpoint create user
  async create(req: express.Request, res: express.Response) {
    const { email, password } = req.body;

    const alreadyExistsUser = await this._userRepository
      .GetUserByemail(email)
      .catch((err) => {
        console.log("Error: ", err);
      });
    console.log("in user ts", alreadyExistsUser);
    if (alreadyExistsUser) {
      return res
        .status(409)
        .json({ message: "User with this email already exists!" });
    }
    const userDto = this.getDtoFromRequest(req);
    const salt = await bcrypt.genSalt();
    userDto.Password = await bcrypt.hash(userDto.Password, salt);
    let createdUser = await this._userRepository.Create(toEntity(userDto));

    if (createdUser) {
      return res.status(201).json(createdUser);
    } else {
      return res
        .status(400)
        .send("The user could not be created. Please check the provided data.");
    }
  }
  async login(req: express.Request, res: express.Response) {
    const loginDto = this.getLoginDtoFromRequest(req);
    let existingUser = await this._userRepository.GetUserByemail(
      req.body.email
    );
    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "Email or password does not correct!" });
    } else {
      try {
        console.log(
          "backend - controller - User.ts - existingUser",
          existingUser
        );
        if (await bcrypt.compare(req.body.password, existingUser.password)) {
          const jwtToken = jwt.sign(
            { id: existingUser.id, email: existingUser.email },
            process.env.JWT_SECRET
          );
          //   res.json({ message: "Welcome Back!", token: jwtToken, role:existingUser.Role.name });
          res.json({
            message: "Welcome Back!",
            token: jwtToken,
            role: existingUser.Role.name,
            companyId: existingUser.companyId,
            name:existingUser.name,
            CompanyName:existingUser.Company.name
          });
        } else {
          return res.status(400).json({ message: " password does not match!" });
        }
      } catch {
        res.status(500).send();
      }
    }
  }
  //#region private methods
  getDtoFromRequest(req: express.Request) {
    return new UserDto(
      req.body.id,
      req.body.name,
      req.body.email,
      req.body.password,
      req.body.companyId,
      req.body.roleId,
      new Date()
    );
  }
  getLoginDtoFromRequest(req: express.Request) {
    return new LoginRequestDto(req.body.email, req.body.password);
  }
  //#endregion
}
