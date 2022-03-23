import {
  Model,
  DataTypes,
  Association
} from "sequelize";
import {sequelize}  from '../config/sequelize'
// import db from '../models'
import {CompanyEntity} from './Company'
import {AssetCategoryEntity} from './AssetCategory'
import { CompanyAssetEntity } from "./CompanyAsset";

interface AssetAttributes {
  id: number;
  asset_categoryId:number;
  title: string;
  description: string;

}

 export class AssetEntity extends Model <AssetAttributes> 
  implements AssetAttributes {
    public id!: number;
    public asset_categoryId!: number;
    public title!: string;
    public description!: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models: any) {
      // define association here 
      AssetCategoryEntity.belongsTo(AssetEntity)
      AssetEntity.hasMany(AssetCategoryEntity)
    }
  }

  AssetEntity.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true
    },
    asset_categoryId:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    title:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    description:{
      type:DataTypes.STRING,
      allowNull:false
    } 
   
  }, {
    sequelize,
    modelName: 'Asset',
    tableName: 'assets'
  });
  


  