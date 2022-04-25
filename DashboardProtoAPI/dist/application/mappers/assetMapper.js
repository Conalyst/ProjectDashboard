"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEntity = void 0;
const models_1 = __importDefault(require("../../Infrastructure/db/models"));
const toEntity = (assetDto) => {
    let assetEntity = new models_1.default.Asset();
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
};
exports.toEntity = toEntity;
