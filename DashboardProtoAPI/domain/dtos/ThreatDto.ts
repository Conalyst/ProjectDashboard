import { IBaseDto } from "../contracts/IBaseDto";


export class ThreatDto implements IBaseDto{
    constructor(id:number, category:string, agent:string, title:string,  description:string, impact:string, likelihood:string, rating:string, indexRating: number, createAt: Date,){
        this.Id = id;
        this.category = category;
        this.agent = agent;
        this.title = title;
        this.description = description;
        this.impact = impact;
        this.likelihood = likelihood;
        this.rating = rating;
        this.indexRating = indexRating;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
    }

    Id: number;
    category: string;
    title: string;
    agent: string;
    description: string;
    impact: string;
    likelihood: string;
    rating: string;
    indexRating: number;
    CreatedAt: Date;
    UpdatedAt: Date | null;
}