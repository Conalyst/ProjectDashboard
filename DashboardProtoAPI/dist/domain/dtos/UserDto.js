"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
class UserDto {
    constructor(id, createAt, username, password, user_type) {
        this.Id = id;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
        this.username = username;
        this.Password = password;
        this.User_Type = user_type;
    }
}
exports.UserDto = UserDto;
