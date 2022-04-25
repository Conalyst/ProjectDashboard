"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Threat_1 = require("../controllers/Threat");
const passport = require("passport");
const threatApi = new Threat_1.ThreatApi();
const threatRouter = (0, express_1.Router)();
threatRouter.get("/", (req, res) => {
    threatApi.getAllThreats(req, res);
});
 
threatRouter.get("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    threatApi.getThreatById(req, res);
});
threatRouter.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    threatApi.create(req, res);
});
 
threatRouter.post("/", (req, res) => {
    threatApi.create(req, res);
});
threatRouter.get("/static", (req, res) => {
    threatApi.getStaticThreats(req, res);
});
 
threatRouter.put("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    threatApi.update(req, res);
});
threatRouter.delete('/:id', passport.authenticate("jwt", { session: false }), (req, res) => threatApi.delete(req, res));
exports.default = threatRouter;
