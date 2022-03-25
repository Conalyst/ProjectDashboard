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
exports.UserRepository = void 0;
const User_1 = require("../db/models/User");
class UserRepository {
    constructor() {
    }
    Get() {
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield User_1.UserEntity.findAll();
            return users;
        });
    }
    GetUserByemail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return User_1.UserEntity.findOne({
                where: { email: `${email}` }
            });
        });
    }
    Create(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return model.save();
        });
    }
}
exports.UserRepository = UserRepository;
