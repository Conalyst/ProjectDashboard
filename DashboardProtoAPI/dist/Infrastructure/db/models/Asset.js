'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Asset extends sequelize_1.Model {
        static associate(models) {
            Asset.belongsTo(models.AssetCategory, {
                foreignKey: 'categoryId',
            });
            Asset.belongsToMany(models.Company, {
                through: models.CompanyAsset,
                foreignKey: 'assetId'
            });
            Asset.belongsToMany(models.Vulnerability, {
                through: models.AssetVulnerability,
                foreignKey: 'assetId'
            });
        }
    }
    Asset.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        categoryId: {
            type: DataTypes.INTEGER,
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
        modelName: 'Asset',
        tableName: 'assets'
    });
    return Asset;
};
