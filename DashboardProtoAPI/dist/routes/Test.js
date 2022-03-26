"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Test_1 = require("../controllers/Test");
const passport = require("passport");
// require('dotenv').config()
require("./Infrastructure/Auth/passport");
const testApi = new Test_1.TestApi();
const testRouter = (0, express_1.Router)();
testRouter.get("/tests", passport.authenticate("jwt", { session: false }), (req, res) => {
    testApi.getAll(req, res);
});
testRouter.post("/tests", (req, res) => testApi.create(req, res));
exports.default = testRouter;
