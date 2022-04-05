"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Valencia extends sequelize_1.Model {
        static associate(models) {
            // define association here
            // clients: Association<UserEntity, ClientEntity>
        }
    }
    Valencia.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        createdAt: {
            type: new DataTypes.DATE,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Valencia',
        tableName: 'valencia'
    });
    return Valencia;
};
