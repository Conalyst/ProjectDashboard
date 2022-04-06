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
exports.CompanyAssetsRepository = void 0;
// import  {CompanyAssetEntity as Asset}  from "../db/models/ComanyAsset"
// import {AssetEntity} from '../db/models/Asset'
const models_1 = __importDefault(require("../db/models"));
class CompanyAssetsRepository {
    constructor() {
    }
    GetByCompanyId(companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            let assets = yield models_1.default.CompanyAsset.findAll({
                where: { companyId: `${companyId}` },
                include: [{ model: models_1.default.Asset,
                        include: [{ model: models_1.default.AssetCategory, attributes: ['id', 'name'] }],
                        attributes: ['id', 'title', 'description'] },
                    { model: models_1.default.Company, attributes: ['id', 'name'] }
                ],
                attributes: ['id', 'assetId', 'companyId', 'integrity', 'confidentiality', 'integrity', 'availability', 'rating']
                // include: { all: true, nested: true }
            });
            return assets;
        });
    }
}
exports.CompanyAssetsRepository = CompanyAssetsRepository;
