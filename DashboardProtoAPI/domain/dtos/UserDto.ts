import { IBaseDto } from "../contracts/IBaseDto";


export class UserDto implements IBaseDto{
    constructor(id:number,name: string,email: string,  password:string , companyId: number,roleId: number,createAt: Date,){
        this.Id = id;
        this.name = name;
        this.email = email;
        this.Password = password;
        this.CompanyId = companyId;
        this.RoleId=roleId;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
    }

    Id: number;
    name: string;
    email: string;
    Password: string;
    CompanyId: number;
    RoleId: number;
    CreatedAt: Date;
    UpdatedAt: Date | null;
}