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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
// import User from '../db/models'
const models_1 = __importDefault(require("../db/models"));
const User = require("../db/models");
class UserRepository {
    constructor() {
    }
    Get() {
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield models_1.default.User.findAll({
                include: [models_1.default.Role, models_1.default.Company]
            });
            return users;
        });
    }
    GetUserByemail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const User = yield models_1.default.User.findOne({
                where: { email: `${email}` },
                include: [models_1.default.Role, models_1.default.Company]
            });
            return User;
        });
    }
    Create(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.User.create(model['dataValues']);
        });
    }
}
exports.UserRepository = UserRepository;
