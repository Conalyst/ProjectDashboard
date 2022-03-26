"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../controllers/User");
const userApi = new User_1.UserApi();
const userRouter = (0, express_1.Router)();
userRouter.get("/", (req, res) => {
    userApi.getAll(req, res);
});
userRouter.post("/", (req, res) => {
    userApi.create(req, res);
});
userRouter.post("/login", (req, res) => userApi.login(req, res));
exports.default = userRouter;
