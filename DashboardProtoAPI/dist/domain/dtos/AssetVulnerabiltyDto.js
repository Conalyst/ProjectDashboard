"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetVulnerabilityDto = void 0;
class AssetVulnerabilityDto {
    constructor(id, assetId, vulnerabilityId, createAt) {
        this.Id = id;
        this.assetId = assetId;
        this.vulnerabiltyId = vulnerabilityId;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
    }
}
exports.AssetVulnerabilityDto = AssetVulnerabilityDto;
