import { IBaseDto } from "../contracts/IBaseDto";


export class AssetVulnerabilityDto implements IBaseDto{
    constructor(id:number, assetId:number, vulnerabilityId:number, createAt: Date){
        this.Id = id;
        this.assetId = assetId;
        this.vulnerabiltyId = vulnerabilityId;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
    }

    Id: number;
    assetId: number;
    vulnerabiltyId: number;
    CreatedAt: Date;
    UpdatedAt: Date | null;
}