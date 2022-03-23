import {
  Model,
  DataTypes,
  Association
} from "sequelize";

import { sequelize }  from '../config/sequelize'
// import db from '../models'
import { UserEntity } from './User'
import { AssetEntity } from './Asset'
import { CompanyAssetEntity } from './CompanyAsset' 

interface CompanyAttributes {
  id: number;
  name: string;
  address: string;
  website: string;
  email: string;
  phone: string;
}

 export  class CompanyEntity extends Model <CompanyAttributes> 
  implements CompanyAttributes {
    public id!: number;
    public name!: string;
    public address!: string;
    public website!: string;
    public email!: string;
    public phone!: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    public static associations: { 
      // users: Association<CompanyEntity, UserEntity>; 
      //  company_assets: Association<CompanyEntity, AssetEntity>; 
    };

    static associate(models: any) {
      // CompanyEntity.hasMany(UserEntity, {
      //   sourceKey: "id",
      //   foreignKey: "companyId",
      //   as: "users",
      // });s
      // CompanyEntity.belongsToMany(AssetEntity, {
      //   through: "company_assets",
      //   foreignKey: "companyId",
      //   otherKey: "assetId",
      //   as: "assets"
      // });
    };
  }
  CompanyEntity.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    address:{
      type:DataTypes.STRING,
      allowNull:true
    } ,
    website:{
      type:DataTypes.STRING,
      allowNull:true
    } ,
    email:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    phone:{
      type:DataTypes.STRING,
      allowNull:true
    } 
  }, {
    sequelize,
    modelName: 'Company',
    tableName: 'companies'
  });
  
 

  // CompanyEntity.belongsToMany(AssetEntity, {
  //   through: "company_assets",
  //   foreignKey: "companyId",
  //   otherKey: "assetId",
  //   as: "assets"
  // });