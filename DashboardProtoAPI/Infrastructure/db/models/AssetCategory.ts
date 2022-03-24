import {
  Model,
  DataTypes,
  Association
} from "sequelize";
import {sequelize}  from '../config/sequelize'
import { AssetEntity } from './Asset'

interface AssetCategoryAttributes {
  id: number;
  name: string;
}

 export  class AssetCategoryEntity extends Model <AssetCategoryAttributes> 
  implements AssetCategoryAttributes {
    public id!: number;
    public name!: string;
 
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */


    static associate(models: any) {
      // define association here
      AssetCategoryEntity.hasMany(AssetEntity, {
        sourceKey: "id",
        foreignKey: "asset_categoryId",
        as: "assets",
      });
    }
  }
  AssetCategoryEntity.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    } 
  }, {
    sequelize,
    modelName: 'AssetCategory',
    tableName: 'asset_category'
  });
 

