import { UserDto } from "../../domain/dtos/UserDto"
import {UserEntity} from "../../Infrastructure/db/models/user"


export const toEntity = (userDto: UserDto): UserEntity => {
    let userEntity = new UserEntity();
    userEntity.id = userDto.Id;
    userEntity.username = userDto.username;
    userEntity.password = userDto.Password;
    userEntity.user_type = userDto.User_Type;
    userEntity.createdAt = userDto.CreatedAt;
    userEntity.updatedAt = userDto.UpdatedAt;
    return userEntity;
}