import { IBaseDto } from "../contracts/IBaseDto";


export class TestDto implements IBaseDto{
    constructor(id:number,title: string,createAt: Date,){
        this.Id = id;
        this.title = title;
       
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
    }

    Id: number;
    title: string;
    CreatedAt: Date;
    UpdatedAt: Date | null;
}