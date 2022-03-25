"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class CompanyAsset extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            CompanyAsset.belongsTo(models.Company, {
                foreignKey: 'companyId'
            });
            CompanyAsset.belongsTo(models.Asset, {
                foreignKey: 'assetId'
            });
        }
    }
    CompanyAsset.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // unique: true,
            references: {
                model: 'Company',
                key: 'id'
            }
        },
        confidentiality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        integrity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        availability: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'CompanyAsset',
        tableName: 'company_assets'
    });
    return CompanyAsset;
};
