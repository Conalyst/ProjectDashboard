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
exports.CompanyAssetsApi = void 0;
const CompanyAssetsRepository_1 = require("../Infrastructure/repositories/CompanyAssetsRepository");
class CompanyAssetsApi {
    constructor() {
        this._asset = new CompanyAssetsRepository_1.CompanyAssetsRepository();
    }
    getAssetsByCompanyId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let companyId = req.params.id;
            console.log(companyId);
            let assets = yield this._asset.GetByCompanyId(companyId);
            return res.status(200).json(assets);
        });
    }
    ;
}
exports.CompanyAssetsApi = CompanyAssetsApi;
