import { UserDto } from "../../domain/dtos/UserDto"
// import User from "../../Infrastructure/db/models/User"
import db from "../../Infrastructure/db/models"

export const toEntity = (userDto: UserDto) => {
    let userEntity = new db.User();
    console.log("userEntity", userEntity)
    userEntity.id = userDto.Id;
    userEntity.email = userDto.email;
    userEntity.password = userDto.Password;
    userEntity.companyId = userDto.CompanyId;
    userEntity.roleId = userDto.RoleId;
    userEntity.name = userDto.name;
    // userEntity.createdAt = userDto.CreatedAt;
    // userEntity.updatedAt = userDto.UpdatedAt;
    return userEntity;
}