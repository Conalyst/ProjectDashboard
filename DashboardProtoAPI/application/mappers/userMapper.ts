import { UserDto } from "../../domain/dtos/UserDto"
import {UserEntity} from "../../Infrastructure/db/models/User"


export const toEntity = (userDto: UserDto): UserEntity => {
    let userEntity = new UserEntity();
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