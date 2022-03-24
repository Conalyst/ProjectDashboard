"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValenciaEntity = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
class ValenciaEntity extends sequelize_1.Model {
    static associate(models) {
        // define association here
        // clients: Association<UserEntity, ClientEntity>
    }
}
exports.ValenciaEntity = ValenciaEntity;
ValenciaEntity.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    roleId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize: sequelize_2.sequelize,
    modelName: 'Valencia',
    tableName: 'valencia'
});
