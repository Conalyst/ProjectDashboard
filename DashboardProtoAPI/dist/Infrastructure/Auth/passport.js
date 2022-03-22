"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const User = require("../db/models/user");
const user_1 = require("../db/models/user");
passport.use(new StrategyJwt({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
}, function (jwtPayload, done) {
    return user_1.UserEntity.findOne({
        where: { id: jwtPayload.id }
    })
        .then((user) => {
        return done(null, user);
    })
        .catch((err) => {
        return done(err);
    });
}));
