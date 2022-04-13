"use strict";
// import {
//   Model,
//   DataTypes,
//   Association
// } from "sequelize";
// import { PrimaryKey } from "sequelize-typescript";
// interface CompanyAssetAttributes {
//   id:number
//   assetId: number;
//   companyId: number;
//   confidentiality: string;
//   integrity: string;
//   availability: string;
//   rating: string;
//   createdAt: Date;
//   updatedAt: Date | null;
// }
// module.exports = (sequelize: any, DataTypes:any) => {
//   class CompanyAsset extends Model <CompanyAssetAttributes> 
//   implements CompanyAssetAttributes {
//     public id!: number;
//     public assetId!: number;
//     public companyId!: number;
//     public confidentiality!: string;
//     public integrity!: string;
//     public availability!: string;
//     public rating!: string;
//     public createdAt!: Date;
//     public updatedAt!: Date | null;
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models: any) {
//       CompanyAsset.belongsTo(models.Company, {
//         foreignKey: 'companyId'
//       })
//       CompanyAsset.belongsTo(models.Asset, {
//         foreignKey: 'assetId'
//       })
//       CompanyAsset.belongsTo(models.CompanyAssetVuln, {
//         foreignKey: 'companyAssetId'
//       })
//     }
//   }
//   CompanyAsset.init({
//     id:{
//       type:DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey:true,
//       autoIncrement:true
//     },
//     assetId:{
//       type:DataTypes.INTEGER,
//       allowNull: false,
//       // unique: true,
//       references: {
//         model: 'Asset',
//         key: 'id'
//       }
//     },
//     companyId:{
//       type:DataTypes.INTEGER,
//       allowNull: false,
//       // unique: true,
//       references: {
//         model: 'Company',
//         key: 'id'
//       }
//     },
//     confidentiality:{
//       type:DataTypes.STRING,
//       allowNull:false
//     } ,
//     integrity: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     } ,
//     availability: {
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
//     modelName: 'CompanyAsset',
//     tableName: 'company_assets'
//   });
//   return CompanyAsset
// }
