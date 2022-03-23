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
exports.AssetApi = void 0;
const AssetRepository_1 = require("../Infrastructure/repositories/AssetRepository");
class AssetApi {
    constructor() {
        this._asset = new AssetRepository_1.AssetRepository();
    }
    getAllAssets(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let assetList = yield this._asset.Get();
            return res.status(200).json(assetList);
        });
    }
    ;
    // async getAssetsById(req: express.Request, res: express.Response){
    //   let assetId = req.params.id;
    //   console.log("asset id is:" , assetId);
    //   // let asset = await this._asset.GetById(assetId);
    //   // return  res.status(200).json(asset);
    // };
    getAssetsById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let assetId = req.params.id;
            console.log("asset id is:", assetId);
            try {
                const record = yield this._asset.GetById(assetId);
                return res.json({ record, msg: "find this record" });
            }
            catch (err) {
                console.log(err);
                return res.json({
                    msg: " failed to find this asset",
                    status: 500,
                    route: "/assets/:id",
                });
            }
        });
    }
    ;
}
exports.AssetApi = AssetApi;
