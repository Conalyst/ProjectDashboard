"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEntity = void 0;
// import User from "../../Infrastructure/db/models/User"
const models_1 = __importDefault(require("../../Infrastructure/db/models"));
const toEntity = (userDto) => {
    let userEntity = new models_1.default.User();
    console.log("userEntity", userEntity);
    userEntity.id = userDto.Id;
    userEntity.email = userDto.email;
    userEntity.password = userDto.Password;
    userEntity.companyId = userDto.CompanyId;
    userEntity.roleId = userDto.RoleId;
    userEntity.name = userDto.name;
    // userEntity.createdAt = userDto.CreatedAt;
    // userEntity.updatedAt = userDto.UpdatedAt;
    return userEntity;
};
exports.toEntity = toEntity;
