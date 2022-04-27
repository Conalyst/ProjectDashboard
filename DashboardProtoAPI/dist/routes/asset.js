"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Asset_1 = require("../controllers/Asset");
const passport = require("passport");
const assetApi = new Asset_1.AssetApi();
const assetRouter = (0, express_1.Router)();
assetRouter.get("/", (req, res) => {
    assetApi.getAllAssets(req, res);
});
assetRouter.get("/static/", (req, res) => {
    assetApi.getStaticAssets(req, res);
});
assetRouter.get("/bar-stats/", (req, res) => {
    assetApi.getStatsForBarChart(req, res);
});
assetRouter.get("/:id", (req, res) => {
    assetApi.getAssetsById(req, res);
});
assetRouter.post("/", (req, res) => {
    assetApi.create(req, res);
});
assetRouter.put("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    assetApi.update(req, res);
});
assetRouter.delete('/:id', passport.authenticate("jwt", { session: false }), (req, res) => assetApi.delete(req, res));
exports.default = assetRouter;
