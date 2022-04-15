import { IBaseDto } from "../contracts/IBaseDto";


export class RiskDto implements IBaseDto{
    constructor(id:number, category:string, title:string,  description:string, impact:string, likelihood:string, rating:string, createAt: Date,){
        this.Id = id;
        this.category = category;
        this.title = title;
        this.description = description;
        this.impact = impact;
        this.likelihood = likelihood;
        this.rating = rating;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
    }

    Id: number;
    category: string;
    title: string;
    description: string;
    impact: string;
    likelihood: string;
    rating: string;
    CreatedAt: Date;
    UpdatedAt: Date | null;
}