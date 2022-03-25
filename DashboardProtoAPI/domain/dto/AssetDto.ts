import { IBaseDto } from "../cotracts/IBaseDto";
import { Optional } from 'sequelize/types'


// export class AssetDto implements IBaseDto{
//     constructor(id:number, createAt: Date, userName: string, email: string, phone: number, password:string , role: boolean){
//         this.Id = id;
//         this.CreatedAt = createAt;
//         this.UpdatedAt = null;
//         this.Name = userName;
//         this.Email = email;
//         this.Phone = phone;
//         this.Password = password;
//         this.Role = role;
//     }

//     Id: number;
//     CreatedAt: Date;
//     UpdatedAt: Date | null;
//     Name: string;
//     Email: string;
//     Phone: number;
//     Password: string;
//     Role: boolean;
// }

export type CreateAssetDTO = {
  title: string;
  descrption: string;
}

