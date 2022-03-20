"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyEntity = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
class CompanyEntity extends sequelize_1.Model {
    static associate(models) {
        // CompanyEntity.hasMany(UserEntity, {
        //   sourceKey: "id",
        //   foreignKey: "companyId",
        //   as: "users",
        // });
        // CompanyEntity.belongsToMany(AssetEntity, {
        //   through: "company_assets",
        //   foreignKey: "companyId",
        //   otherKey: "assetId",
        //   as: "assets"
        // });
    }
}
exports.CompanyEntity = CompanyEntity;
CompanyEntity.init({
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
    modelName: 'Company',
    tableName: 'companies'
});
// CompanyEntity.belongsToMany(AssetEntity, {
//   through: "company_assets",
//   foreignKey: "companyId",
//   otherKey: "assetId",
//   as: "assets"
// });
