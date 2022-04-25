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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskAssetApi = void 0;
const RiskAssetRepository_1 = require("../Infrastructure/repositories/RiskAssetRepository");
const RiskAssetDto_1 = require("../domain/dtos/RiskAssetDto");
const RiskAssetMapper_1 = require("../application/mappers/RiskAssetMapper");
class RiskAssetApi {
    constructor() {
        this._riskAssetRepository = new RiskAssetRepository_1.RiskAssetRepository();
    }
    getByRiskId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let riskId = req.params.id;
            // console.log(Vulnerability)
            let risks = yield this._riskAssetRepository.GetByRiskId(riskId);
            return res.status(200).json(risks);
        });
    }
    ;
    getByAssetId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let assetId = req.params.id;
            let assets = yield this._riskAssetRepository.GetByAssetId(assetId);
            return res.status(200).json(assets);
        });
    }
    ;
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const assetId = req.query.assetId;
            const riskId = req.query.riskId;
            const alreadyExists = yield this._riskAssetRepository.GetByRisksAssetIds(riskId, assetId)
                .catch((err) => {
                console.log("Error: ", err);
            });
            if (alreadyExists) {
                return res.status(409).json({ message: "this Risk-Asset already exist!" });
            }
            else {
                const riskAssetDto = this.getDtoFromRequest(req);
                let createdRiskAsset = yield this._riskAssetRepository.Create((0, RiskAssetMapper_1.toEntity)(riskAssetDto));
                if (createdRiskAsset) {
                    return res.status(201).json(createdRiskAsset);
                }
                else {
                    return res.status(400).send("The Risk-Asset could not be created. Please check the provided data.");
                }
            }
        });
    }
    getDtoFromRequest(req) {
        return new RiskAssetDto_1.RiskAssetDto(req.body.id, req.body.assetId, req.body.assetId, new Date());
    }
 
    getCalculatedRisk(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Risk Id", req.params.id);
            const riskId = req.params.id;
            const asset = yield this._riskAssetRepository.assetTocalcRisk(riskId);
            const vuln = yield this._riskAssetRepository.vulnTocalcRisk(riskId);
            const threat = yield this._riskAssetRepository.threatTocalcRisk(riskId);
            const highestAssetRating = asset[0]['Asset.rating'];
            const highestVulnRating = vuln[0]['Asset.Vulnerabilities.rating'];
            const highestThreatRating = threat[0]['Asset.Vulnerabilities.Threats.rating'];
            const risk = { highestAssetRating, highestVulnRating, highestThreatRating };
            const scores = { 'H': 4, 'M': 3, 'L': 2 };
            const riskScore = scores[risk.highestAssetRating] * scores[risk.highestVulnRating] * scores[risk.highestThreatRating];
            risk['score'] = riskScore;
            //  
            //  console.log("Result...", threat[0])
            return res.status(200).json(risk);
        });
    }

}
exports.RiskAssetApi = RiskAssetApi;
