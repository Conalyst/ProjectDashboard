"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const passport = require("passport");
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
// const User = require("../db/models/User");
// import  User  from "../db/models/User";
const models_1 = __importDefault(require("../db/models"));
passport.use(new StrategyJwt({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
}, function (jwtPayload, done) {
    return models_1.default.User.findOne({
        where: { id: jwtPayload.id }
    })
        .then((user) => {
        return done(null, user);
    })
        .catch((err) => {
        return done(err);
    });
}));
