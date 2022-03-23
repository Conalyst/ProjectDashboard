"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetEntity = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const AssetCategory_1 = require("./AssetCategory");
class AssetEntity extends sequelize_1.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here 
        AssetCategory_1.AssetCategoryEntity.belongsTo(AssetEntity);
        AssetEntity.hasMany(AssetCategory_1.AssetCategoryEntity);
    }
}
exports.AssetEntity = AssetEntity;
AssetEntity.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    asset_categoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelize_2.sequelize,
    modelName: 'Asset',
    tableName: 'assets'
});
