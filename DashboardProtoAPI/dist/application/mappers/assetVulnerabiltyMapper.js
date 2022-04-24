"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEntity = void 0;
const models_1 = __importDefault(require("../../Infrastructure/db/models"));
const toEntity = (assetVulnerabilityDto) => {
    let assetVulnerabilityEntity = new models_1.default.AssetVulnerability();
    assetVulnerabilityEntity.id = assetVulnerabilityDto.Id;
    assetVulnerabilityEntity.assetId = assetVulnerabilityDto.assetId;
    assetVulnerabilityEntity.vulnerabilityId = assetVulnerabilityDto.vulnerabiltyId;
    return assetVulnerabilityEntity;
};
exports.toEntity = toEntity;
