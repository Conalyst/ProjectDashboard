"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class RiskAsset extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            RiskAsset.belongsTo(models.Risk, {
                foreignKey: 'riskId'
            });
            RiskAsset.belongsTo(models.Asset, {
                foreignKey: 'assetId',
            });
        }
    }
    RiskAsset.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        riskId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // unique: true,
            references: {
                model: 'Risk',
                key: 'id'
            }
        },
        assetId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // unique: true,
            references: {
                model: 'Asset',
                key: 'id'
            }
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
        modelName: 'RiskAsset',
        tableName: 'risk_assets'
    });
    return RiskAsset;
};
