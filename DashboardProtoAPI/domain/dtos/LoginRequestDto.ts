import { IBaseDto } from "../contracts/IBaseDto";


export class LoginRequestDto{
    constructor(username: string, password:string){
        this.username = username;
        this.Password = password;
    }

    username: string;
    Password: string;
}