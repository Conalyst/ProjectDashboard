import { IBaseDto } from "../contracts/IBaseDto";


export class UserDto implements IBaseDto{
    constructor(id:number, createAt: Date, username: string, password:string , user_type: Enumerator){
        this.Id = id;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
        this.username = username;
        this.Password = password;
        this.User_Type = user_type;
    }

    Id: number;
    CreatedAt: Date;
    UpdatedAt: Date | null;
    username: string;
    Password: string;
    User_Type: Enumerator;
}