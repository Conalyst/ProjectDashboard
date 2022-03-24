import { IBaseDto } from "../contracts/IBaseDto";


export class LoginRequestDto{
    constructor(email: string, password:string){
        this.email = email;
        this.Password = password;
    }

    email: string;
    Password: string;
}