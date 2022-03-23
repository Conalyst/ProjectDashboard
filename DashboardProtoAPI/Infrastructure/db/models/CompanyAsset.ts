import {
  Model,
  DataTypes,
  Association
} from "sequelize";
import {sequelize}  from '../config/sequelize'
// import db from '../models'
import { AssetEntity } from './Asset'
import { CompanyEntity } from './Company'




interface CompanyAssetAttributes {
  id: number,
  assetId: number;
  companyId: number;
  confidentiality: string;
  integrity: string;
  availability: string;
  rating: string;
}

 export  class CompanyAssetEntity extends Model <CompanyAssetAttributes> 
  implements CompanyAssetAttributes {
    public id!: number;
    public assetId!: number;
    public companyId!: number;
    public confidentiality!: string;
    public integrity!: string;
    public availability!: string;
    public rating!: string;
 
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

 
    static associate(models: any) {
      console.log("association --------");
      // define association here
      AssetEntity.belongsToMany(CompanyEntity, {
        through: CompanyAssetEntity, 
        foreignKey:  { name: 'assetId', allowNull: false } 
        // // foreignKey: 'assetId',
        // // otherKey: 'companyId'
      })
      CompanyEntity.belongsToMany(AssetEntity, {
        through: CompanyAssetEntity,
        foreignKey:  { name: 'companyId', allowNull: false } 
        // foreignKey: 'companyId',
        // otherKey: 'assetId'
      }) 
    }
  }

  CompanyAssetEntity.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true
    },
    assetId:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
    companyId:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
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
    }             
  }, {
    sequelize,
    modelName: 'CompanyAsset',
    tableName: 'company_assets'
  });
 
