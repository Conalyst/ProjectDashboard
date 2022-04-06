"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleEntity = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const User_1 = require("./User");
const Valencia_1 = require("./Valencia");
class RoleEntity extends sequelize_1.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        RoleEntity.hasMany(User_1.UserEntity, {
            sourceKey: "id",
            foreignKey: "roleId",
            as: "users",
        });
        RoleEntity.hasMany(Valencia_1.ValenciaEntity, {
            sourceKey: "id",
            foreignKey: "roleId",
            as: "valencia",
        });
    }
}
exports.RoleEntity = RoleEntity;
RoleEntity.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelize_2.sequelize,
    modelName: 'Role',
    tableName: 'roles'
});
