"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RiskAsset_1 = require("../controllers/RiskAsset");
const riskAssetApi = new RiskAsset_1.RiskAssetApi();
const riskCalculateRouter = (0, express_1.Router)();
riskCalculateRouter.get("/:id", (req, res) => {
    riskAssetApi.getCalculatedRisk(req, res);
});
exports.default = riskCalculateRouter;
