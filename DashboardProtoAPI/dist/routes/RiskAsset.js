"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RiskAsset_1 = require("../controllers/RiskAsset");
const riskAssetApi = new RiskAsset_1.RiskAssetApi();
const riskAssetRouter = (0, express_1.Router)();
riskAssetRouter.post("/", (req, res) => {
    riskAssetApi.create(req, res);
});
riskAssetRouter.get("/riskcalc", (req, res) => {
    riskAssetApi.getCalculatedRisk(req, res);
});
riskAssetRouter.get("/:id", (req, res) => {
    riskAssetApi.getByRiskId(req, res);
});
exports.default = riskAssetRouter;
