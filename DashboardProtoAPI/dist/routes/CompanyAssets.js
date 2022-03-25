"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CompanyAssets_1 = require("../controllers/CompanyAssets");
const companyAssetsApi = new CompanyAssets_1.CompanyAssetsApi();
const companyAssetsRouter = (0, express_1.Router)();
// assetRouter.get("/", (req: Request, res: Response) => {     
//     return res.status(200).send("Hello World");    
//   }
// )
// assetRouter.get("/", (req, res) => {     
//   companyAssetApi.getAllAssets(req, res);    
// })
companyAssetsRouter.get("/:id", (req, res) => {
    companyAssetsApi.getAssetsByCompanyId(req, res);
});
exports.default = companyAssetsRouter;
