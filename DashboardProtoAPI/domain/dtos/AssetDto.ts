import { IBaseDto } from "../contracts/IBaseDto";


export class AssetDto implements IBaseDto{
    constructor(id:number, categoryId:number, title:string,  description:string, confidentiality:string, integrity:string, availability:string, rating:string,indexRating:number, createAt: Date,){
        this.Id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.description = description;
        this.confidentiality = confidentiality;
        this.integrity = integrity;
        this.availability = availability;
        this.rating = rating;
        this.indexRating=indexRating;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
    }

    Id: number;
    categoryId: number;
    title: string;
    description: string;
    confidentiality: string;
    integrity: string;
    availability: string;
    rating: string;
    indexRating: number;
    CreatedAt: Date;
    UpdatedAt: Date | null;
}