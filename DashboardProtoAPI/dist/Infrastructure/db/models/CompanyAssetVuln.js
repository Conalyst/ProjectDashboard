"use strict";
// import {
//   Model,
//   DataTypes,
//   Association
// } from "sequelize";
// import { PrimaryKey } from "sequelize-typescript";
// interface CompanyAssetVulnAttributes {
//   id:number
//   companyAssetId: number;
//   assetVulnerabilityId: number;
//   impact: string;
//   likelihood: string;
//   rating: string;
//   createdAt: Date;
//   updatedAt: Date | null;
// }
// module.exports = (sequelize: any, DataTypes:any) => {
//   class CompanyAssetVuln extends Model <CompanyAssetVulnAttributes> 
//   implements CompanyAssetVulnAttributes {
//     public id!: number;
//     public companyAssetId!: number;
//     public assetVulnerabilityId!: number;
//     public impact!: string;
//     public likelihood!: string;
//     public rating!: string;
//     public createdAt!: Date;
//     public updatedAt!: Date | null;
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models: any) {
//       CompanyAssetVuln.hasOne(models.CompanyAsset, {
//         foreignKey: 'companyAssetId'
//       })
//       CompanyAssetVuln.belongsTo(models.Ass, {
//         foreignKey: 'companyAssetId'
//       })
//     }
//   }
//   CompanyAssetVuln.init({
//     id:{
//       type:DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey:true,
//       autoIncrement:true
//     },
//     companyAssetId:{
//       type:DataTypes.INTEGER,
//       allowNull: false,
//       // unique: true,
//       references: {
//         model: 'CompanyAsset',
//         key: 'id'
//       }
//     },
//     assetVulnerabilityId:{
//       type:DataTypes.INTEGER,
//       allowNull: false,
//       // unique: true,
//       references: {
//         model: 'AssetVulnerability',
//         key: 'id'
//       }
//     },
//     impact:{
//       type:DataTypes.STRING,
//       allowNull:false
//     } ,
//     likelihood: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     } ,
//     rating: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     updatedAt: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     createdAt: {
//       type: new DataTypes.DATE,
//       allowNull: false,
//     },             
//   }, {
//     sequelize,
//     modelName: 'CompanyAssetVuln',
//     tableName: 'comp_asset_vuln'
//   });
//   return CompanyAssetVuln
// }
