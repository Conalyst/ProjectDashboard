import { AssetDto } from "../../domain/dtos/AssetDto"
import db from "../../Infrastructure/db/models"

export const toEntity = (assetDto: AssetDto) => {
    let assetEntity = new db.Asset();
    assetEntity.id = assetDto.Id;
    assetEntity.categoryId = assetDto.categoryId;
    assetEntity.title = assetDto.title;
    assetEntity.description = assetDto.description;
    return assetEntity;
}