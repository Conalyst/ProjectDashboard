"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAssetEntity = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const Asset_1 = require("./Asset");
const Company_1 = require("./Company");
class CompanyAssetEntity extends sequelize_1.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        Asset_1.AssetEntity.belongsToMany(Company_1.CompanyEntity, {
            through: CompanyAssetEntity
        });
        Company_1.CompanyEntity.belongsToMany(Asset_1.AssetEntity, {
            through: CompanyAssetEntity
        });
    }
}
exports.CompanyAssetEntity = CompanyAssetEntity;
CompanyAssetEntity.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    assetId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    companyId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    confidentiality: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    integrity: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    availability: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: sequelize_2.sequelize,
    modelName: 'CompanyAsset',
    tableName: 'company_assets'
});
