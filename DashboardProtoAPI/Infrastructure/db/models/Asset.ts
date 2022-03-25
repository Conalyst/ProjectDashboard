'use strict';
import {
  Model,
  UUIDV4,
  
}  from 'sequelize';

interface AssetAttributes {
  id: number;
  categoryId:number;
  title: string;
  description: string;
}

export interface AssetOutput extends Required<AssetAttributes> {}

module.exports = (sequelize: any, DataTypes:any) => {
  class Asset extends Model <AssetAttributes> 
  implements AssetAttributes {
    public id!: number;
    public categoryId!: number;
    public title!: string;
    public description!: string;

    static associate(models: any) {
      Asset.belongsTo(models.AssetCategory, {
        foreignKey: 'categoryId',
      })
      Asset.belongsToMany(models.Company, {
        through: models.CompanyAsset,
        foreignKey: 'assetId' 
      }) 
    }
  }
  Asset.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true
    },
    categoryId:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    title:{
      type:DataTypes.TEXT,
      // allowNull:false
    } ,
    description:{
      type:DataTypes.TEXT,
      // allowNull:false
    } 
  }, {
    sequelize,
    modelName: 'Asset',
    tableName: 'assets'
  });
  return Asset;
}
