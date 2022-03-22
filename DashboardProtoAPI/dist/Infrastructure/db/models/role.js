"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleEntity = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const user_1 = require("./user");
class RoleEntity extends sequelize_1.Model {
}
exports.RoleEntity = RoleEntity;
RoleEntity.init({
    id: sequelize_1.DataTypes.INTEGER,
    name: sequelize_1.DataTypes.STRING
}, {
    sequelize: sequelize_2.sequelize,
    modelName: 'Role',
});
RoleEntity.hasMany(user_1.UserEntity, {
    sourceKey: "id",
    foreignKey: "roleId",
    as: "Users",
});
