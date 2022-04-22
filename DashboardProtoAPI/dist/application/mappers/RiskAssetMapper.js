"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEntity = void 0;
const models_1 = __importDefault(require("../../Infrastructure/db/models"));
const toEntity = (riskAssetDto) => {
    let riskAssetEntity = new models_1.default.RiskAsset();
    riskAssetEntity.id = riskAssetDto.Id;
    riskAssetEntity.riskId = riskAssetDto.riskId;
    riskAssetEntity.assetId = riskAssetDto.assetId;
    return riskAssetEntity;
};
exports.toEntity = toEntity;
