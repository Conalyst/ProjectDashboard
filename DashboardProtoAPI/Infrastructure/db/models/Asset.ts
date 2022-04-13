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
  confidentiality: string;
  integrity: string;
  availability: string;
  rating: string;
  createdAt: Date;
  updatedAt: Date | null;
}

module.exports = (sequelize: any, DataTypes:any) => {
  class Asset extends Model <AssetAttributes> 
  implements AssetAttributes {
    public id!: number;
    public categoryId!: number;
    public title!: string;
    public description!: string;
    public confidentiality!: string;
    public integrity!: string;
    public availability!: string;
    public rating!: string;
    public createdAt!: Date;
    public updatedAt!: Date | null;

    static associate(models: any) {
      Asset.belongsTo(models.AssetCategory, {
        foreignKey: 'categoryId',
      })
      Asset.belongsToMany(models.Vulnerability, {
        through: models.AssetVulnerability,
        foreignKey: 'assetId' ,
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
    } ,
    confidentiality:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    integrity: {
      type: DataTypes.STRING,
      allowNull: false,
    } ,
    availability: {
      type: DataTypes.STRING,
      allowNull: false,
    } ,
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
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
}
