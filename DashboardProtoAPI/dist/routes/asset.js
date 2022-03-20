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
}
exports.AssetApi = AssetApi;
// app.get(
//   "/read/:id",
//   TodoValidator.findParam(),
//   Middleware.handleValidationError,
//   async (req: Request, res: Response) => {
//     const id = req.params.id;
//     console.log("id is: ", id);
//     try {
//       const record = await TodoInterface.findOne({ where: { id: id } });
//       return res.json({ record, msg: "find this record" });
//     } catch (err) {
//       return res.json({
//         msg: " failed to find this record",
//         status: 500,
//         route: "/read/:id",
//       });
//     }
//   }
// );
