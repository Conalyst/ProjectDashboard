import { AssetDto } from "../../domain/dtos/AssetDto"
import db from "../../Infrastructure/db/models"

export const toEntity = (assetDto: AssetDto) => {
    let assetEntity = new db.Asset();
    assetEntity.id = assetDto.Id;
    assetEntity.categoryId = assetDto.categoryId;
    assetEntity.title = assetDto.title;
    assetEntity.description = assetDto.description;
    assetEntity.confidentiality = assetDto.confidentiality;
    assetEntity.integrity = assetDto.integrity;
    assetEntity.availability = assetDto.availability;
    assetEntity.rating = assetDto.rating;
    assetEntity.indexRating = assetDto.indexRating;
    return assetEntity;
}