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
exports.AssetRepository = void 0;
// import   Asset  from "../db/models"
// import   AssetOutput  from "../db/models"
// import  AssetCategory  from "../db/models";
const models_1 = __importDefault(require("../db/models"));
class AssetRepository {
    constructor() {
    }
    Get() {
        return __awaiter(this, void 0, void 0, function* () {
            let assets = yield models_1.default.Asset.findAll({
                include: [models_1.default.AssetCategory]
            });
            return assets;
        });
    }
    GetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findByPk(id);
        });
    }
    GetByCompanyId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findByPk(id);
        });
    }
}
exports.AssetRepository = AssetRepository;
