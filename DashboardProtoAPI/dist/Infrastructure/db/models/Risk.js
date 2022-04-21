'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Risk extends sequelize_1.Model {
        static associate(models) {
            Risk.belongsToMany(models.Asset, {
                through: models.RiskAsset,
                foreignKey: 'riskId'
            });
        }
    }
    Risk.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        title: {
            type: DataTypes.TEXT,
            // allowNull:false
        },
        description: {
            type: DataTypes.TEXT,
            // allowNull:false
        },
        impact: {
            type: DataTypes.STRING,
            allowNull: true
        },
        likelihood: {
            type: DataTypes.STRING,
            allowNull: true
        },
        rating: {
            type: DataTypes.STRING,
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
        modelName: 'Risk',
        tableName: 'risks'
    });
    return Risk;
};
