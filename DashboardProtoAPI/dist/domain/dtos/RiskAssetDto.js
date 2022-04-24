"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskAssetDto = void 0;
class RiskAssetDto {
    constructor(id, riskId, assetId, createAt) {
        this.Id = id;
        this.riskId = riskId;
        this.assetId = assetId;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
    }
}
exports.RiskAssetDto = RiskAssetDto;
