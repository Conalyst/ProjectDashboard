"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEntity = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const User_1 = require("./User");
class ClientEntity extends sequelize_1.Model {
}
exports.ClientEntity = ClientEntity;
ClientEntity.init({
    id: sequelize_1.DataTypes.INTEGER,
    name: sequelize_1.DataTypes.STRING,
}, {
    sequelize: sequelize_2.sequelize,
    modelName: 'Client',
});
ClientEntity.hasMany(User_1.UserEntity, {
    sourceKey: "id",
    foreignKey: "clientId",
    as: "users",
});
