"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Company extends sequelize_1.Model {
        static associate(models) {
            Company.hasMany(models.User, {
                sourceKey: "id",
                foreignKey: "companyId",
            });
            Company.belongsToMany(models.Asset, {
                through: models.CompanyAsset,
                foreignKey: 'companyId'
            });
        }
    }
    Company.init({
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
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            allowNull: false,
            defaultValue: new Date(),
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            defaultValue: new Date(),
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        modelName: 'Company',
        tableName: 'companies'
    });
    return Company;
};
// CompanyEntity.belongsToMany(AssetEntity, {
//   through: "company_assets",
//   foreignKey: "companyId",
//   otherKey: "assetId",
//   as: "assets"
// });
