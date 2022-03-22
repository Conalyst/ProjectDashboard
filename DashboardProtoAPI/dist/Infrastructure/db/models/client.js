"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEntity = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const user_1 = require("./user");
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
ClientEntity.hasMany(user_1.UserEntity, {
    sourceKey: "id",
    foreignKey: "clientId",
    as: "Users",
});
