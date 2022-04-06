"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Asset_1 = require("../controllers/Asset");
const assetApi = new Asset_1.AssetApi();
const assetRouter = (0, express_1.Router)();
assetRouter.get("/", (req, res) => {
    assetApi.getAllAssets(req, res);
});
assetRouter.get("/:id", (req, res) => {
    assetApi.getAssetsById(req, res);
});
assetRouter.post("/", (req, res) => {
    assetApi.create(req, res);
});
exports.default = assetRouter;
