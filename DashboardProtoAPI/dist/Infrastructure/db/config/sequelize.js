"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const config_json_1 = __importDefault(require("./config.json"));
const env = process.env.NODE_ENV || 'development';
const sequelize_1 = require("sequelize");
console.log(env);
const sequelizeConfig = {
    DBNAME: config_json_1.default[env].database,
    USERNAME: config_json_1.default[env].username,
    PASSWORD: config_json_1.default[env].password,
    HOST: config_json_1.default[env].host,
    DIALECT: config_json_1.default[env].dialect
};
exports.sequelize = new sequelize_1.Sequelize(sequelizeConfig.DBNAME, sequelizeConfig.USERNAME, sequelizeConfig.PASSWORD, {
    host: sequelizeConfig.HOST,
    dialect: sequelizeConfig.DIALECT
});
//   export const sequelize = new Sequelize("postgres://bjyajelegqkjvz:2b425602250544952f2d26b08771a55c17c5a3dfd84fa2ff372c9813e8730223@ec2-34-194-158-176.compute-1.amazonaws.com:5432/deram2iivs2qoa")
