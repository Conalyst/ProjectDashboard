"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Risk_1 = require("../controllers/Risk");
const riskApi = new Risk_1.RiskApi();
const riskRouter = (0, express_1.Router)();
riskRouter.get("/", (req, res) => {
    riskApi.getAllRisks(req, res);
});
riskRouter.post("/", (req, res) => {
    riskApi.create(req, res);
});
riskRouter.get("/static", (req, res) => {
    riskApi.getStaticRisks(req, res);
});
riskRouter.put("/:id", (req, res) => {
    riskApi.update(req, res);
});
exports.default = riskRouter;
