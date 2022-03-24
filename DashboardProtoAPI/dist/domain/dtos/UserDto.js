"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
class UserDto {
    constructor(id, name, email, password, companyId, roleId, createAt) {
        this.Id = id;
        this.name = name;
        this.email = email;
        this.Password = password;
        this.CompanyId = companyId;
        this.RoleId = roleId;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
    }
}
exports.UserDto = UserDto;
