"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskAssetRepository = void 0;
const models_1 = __importDefault(require("../db/models"));
const RiskAsset = require("../db/models");
class RiskAssetRepository {
    constructor() {
    }
    GetByRiskId(riskId) {
        return __awaiter(this, void 0, void 0, function* () {
            let risks = yield models_1.default.RiskAsset.findAll({
                where: { riskId: `${riskId}` },
            });
            return risks;
        });
    }
    GetByAssetId(assetId) {
        return __awaiter(this, void 0, void 0, function* () {
            let assets = yield models_1.default.RiskAsset.findAll({
                where: { assetId: `${assetId}` },
            });
            return assets;
        });
    }
    GetByRisksAssetIds(riskId, assetId) {
        return __awaiter(this, void 0, void 0, function* () {
            let results = yield models_1.default.AssetVulnerability.findOne({
                where: { riskId: `${riskId}`, assetId: `${assetId}` }
            });
            return results;
        });
    }
    Create(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.RiskAsset.create(model['dataValues']);
        });
    }
}
exports.RiskAssetRepository = RiskAssetRepository;