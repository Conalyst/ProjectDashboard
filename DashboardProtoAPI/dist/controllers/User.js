"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApi = void 0;
const UserRepository_1 = require("../Infrastructure/repositories/UserRepository");
const userMapper_1 = require("../application/mappers/userMapper");
const UserDto_1 = require("../domain/dtos/UserDto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const LoginRequestDto_1 = require("../domain/dtos/LoginRequestDto");
class UserApi {
    constructor() {
        this._userRepository = new UserRepository_1.UserRepository();
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let usersList = yield this._userRepository.Get();
            return res.status(200).json(usersList);
        });
    }
    ;
    //endpoint create user
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const alreadyExistsUser = yield this._userRepository.GetUserByemail(email).catch((err) => {
                console.log("Error: ", err);
            });
            console.log("in user ts", alreadyExistsUser);
            if (alreadyExistsUser) {
                return res.status(409).json({ message: "User with this email already exists!" });
            }
            const userDto = this.getDtoFromRequest(req);
            const salt = yield bcrypt.genSalt();
            userDto.Password = yield bcrypt.hash(userDto.Password, salt);
            let createdUser = yield this._userRepository.Create((0, userMapper_1.toEntity)(userDto));
            if (createdUser) {
                return res.status(201).json(createdUser);
            }
            else {
                return res.status(400).send("The user could not be created. Please check the provided data.");
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const loginDto = this.getLoginDtoFromRequest(req);
            let existingUser = yield this._userRepository.GetUserByemail(req.body.email);
            existingUser = existingUser["dataValues"];
            console.log("######", existingUser);
            if (!existingUser)
                return res
                    .status(400)
                    .json({ message: "Email or password does not match!" });
            console.log(req.body.password + " , " + existingUser.password);
            try {
                if (yield bcrypt.compare(req.body.password, existingUser.password)) {
                    const jwtToken = jwt.sign({ id: existingUser.id, email: existingUser.email }, process.env.JWT_SECRET);
                    res.json({ message: "Welcome Back!", token: jwtToken });
                }
                else {
                    return res
                        .status(400)
                        .json({ message: " password does not match!" });
                }
            }
            catch (_a) {
                res.status(500).send();
            }
        });
    }
    //#region private methods
    getDtoFromRequest(req) {
        return new UserDto_1.UserDto(req.body.id, req.body.name, req.body.email, req.body.password, req.body.companyId, req.body.roleId, new Date());
    }
    getLoginDtoFromRequest(req) {
        return new LoginRequestDto_1.LoginRequestDto(req.body.email, req.body.password);
    }
}
exports.UserApi = UserApi;
