"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asset_1 = require("../controllers/asset");
const assetApi = new asset_1.AssetApi();
const assetRouter = (0, express_1.Router)();
// assetRouter.get("/", (req: Request, res: Response) => {     
//     return res.status(200).send("Hello World");    
//   }
// )
assetRouter.get("/", (req, res) => {
    assetApi.getAllAssets(req, res);
});
assetRouter.get("/:id", (req, res) => {
    assetApi.getAssetsById(req, res);
});
exports.default = assetRouter;
