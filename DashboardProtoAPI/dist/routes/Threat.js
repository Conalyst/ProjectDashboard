"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Threat_1 = require("../controllers/Threat");
const threatApi = new Threat_1.ThreatApi();
const threatRouter = (0, express_1.Router)();
threatRouter.get("/", (req, res) => {
    threatApi.getAllThreats(req, res);
});
threatRouter.get("/:id", (req, res) => {
    threatApi.getThreatById(req, res);
});
threatRouter.post("/", (req, res) => {
    threatApi.create(req, res);
});
exports.default = threatRouter;
