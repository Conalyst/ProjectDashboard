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
const AssetDto_1 = require("../domain/dtos/AssetDto");
const assetMapper_1 = require("../application/mappers/assetMapper");
class AssetApi {
    constructor() {
        this._assetRepository = new AssetRepository_1.AssetRepository();
    }
    getAllAssets(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let assetList = yield this._assetRepository.Get();
            console.log("Helllllo");
            return res.status(200).json(assetList);
        });
    }
    ;
    getAssetsById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let assetId = req.params.id;
            console.log(assetId);
            let asset = yield this._assetRepository.GetById(assetId);
            return res.status(200).json(asset);
        });
    }
    ;
    //endpoint create Asset
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title } = req.body;
            const alreadyExistsAsset = yield this._assetRepository.GetAssetByTitle(title)
                .catch((err) => {
                console.log("Error: ", err);
            });
            console.log("in Asset ts", alreadyExistsAsset);
            if (alreadyExistsAsset) {
                return res.status(409).json({ message: "this Asset already exist!" });
            }
            else {
                const assetDto = this.getDtoFromRequest(req);
                let createdAsset = yield this._assetRepository.Create((0, assetMapper_1.toEntity)(assetDto));
                console.log("kkkkkkk", createdAsset);
                if (createdAsset) {
                    return res.status(201).json(createdAsset);
                }
                else {
                    return res.status(400).send("The asset could not be created. Please check the provided data.");
                }
            }
        });
    }
    //#region private methods
    getDtoFromRequest(req) {
        return new AssetDto_1.AssetDto(req.body.id, req.body.categoryId, req.body.title, req.body.description, new Date());
    }
}
exports.AssetApi = AssetApi;
