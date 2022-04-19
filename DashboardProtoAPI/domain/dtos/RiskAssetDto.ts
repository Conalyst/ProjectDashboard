import { IBaseDto } from "../contracts/IBaseDto";


export class RiskAssetDto implements IBaseDto{
    constructor(id:number, riskId:number, assetId:number, createAt: Date){
        this.Id = id;
        this.riskId = riskId;
        this.assetId = assetId;        
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
    }

    Id: number;
    riskId: number;
    assetId: number;
    CreatedAt: Date;
    UpdatedAt: Date | null;
}