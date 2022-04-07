import { IBaseDto } from "../contracts/IBaseDto";


export class AssetDto implements IBaseDto{
    constructor(id:number,categoryId: number,title: string,  description:string ,createAt: Date,){
        this.Id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.description = description;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
    }

    Id: number;
    categoryId: number;
    title: string;
    description: string;
    CreatedAt: Date;
    UpdatedAt: Date | null;
}