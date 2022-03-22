"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEntity = void 0;
const user_1 = require("../../Infrastructure/db/models/user");
const toEntity = (userDto) => {
    let userEntity = new user_1.UserEntity();
    userEntity.id = userDto.Id;
    userEntity.username = userDto.username;
    userEntity.password = userDto.Password;
    userEntity.user_type = userDto.User_Type;
    userEntity.createdAt = userDto.CreatedAt;
    userEntity.updatedAt = userDto.UpdatedAt;
    return userEntity;
};
exports.toEntity = toEntity;
