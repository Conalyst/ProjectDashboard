"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetCategoryEntity = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const Asset_1 = require("./Asset");
class AssetCategoryEntity extends sequelize_1.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        console.log("---------------assetCategory");
        AssetCategoryEntity.hasMany(Asset_1.AssetEntity, {
            sourceKey: "id",
            foreignKey: "asset_categoryId",
            as: "assets",
        });
    }
}
exports.AssetCategoryEntity = AssetCategoryEntity;
AssetCategoryEntity.init({
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
    modelName: 'AssetCategory',
    tableName: 'asset_category'
});
