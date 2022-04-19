import { RiskAssetDto } from "../../domain/dtos/RiskAssetDto"
import db from "../../Infrastructure/db/models"

export const toEntity = (riskAssetDto: RiskAssetDto) => {
    let riskAssetEntity = new db.RiskAsset();
    riskAssetEntity.id = riskAssetDto.Id;
    riskAssetEntity.riskId = riskAssetDto.riskId; 
    riskAssetEntity.assetId = riskAssetDto.assetId;
    return riskAssetEntity;
}