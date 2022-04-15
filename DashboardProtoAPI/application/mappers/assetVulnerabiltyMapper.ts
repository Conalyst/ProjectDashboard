import { AssetVulnerabilityDto } from "../../domain/dtos/AssetVulnerabiltyDto"
import db from "../../Infrastructure/db/models"

export const toEntity = (assetVulnerabilityDto: AssetVulnerabilityDto) => {
    let assetVulnerabilityEntity = new db.AssetVulnerability();
    assetVulnerabilityEntity.id = assetVulnerabilityDto.Id;
    assetVulnerabilityEntity.assetId = assetVulnerabilityDto.assetId;
    assetVulnerabilityEntity.vulnerabilityId = assetVulnerabilityDto.vulnerabiltyId; 
    return assetVulnerabilityEntity;
}