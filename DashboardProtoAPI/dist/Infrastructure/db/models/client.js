"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEntity = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const user_1 = require("./user");
class ClientEntity extends sequelize_1.Model {
    static associate(models) {
        // define association here
        // clients: Association<UserEntity, ClientEntity>
    }
}
exports.ClientEntity = ClientEntity;
ClientEntity.init({
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
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    website: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: sequelize_2.sequelize,
    modelName: 'Client',
    tableName: 'clients'
});
ClientEntity.hasMany(user_1.UserEntity, {
    sourceKey: "id",
    foreignKey: "clientId",
    as: "users",
});
