"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEntity = void 0;
const User_1 = require("../../Infrastructure/db/models/User");
const toEntity = (userDto) => {
    let userEntity = new User_1.UserEntity();
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
