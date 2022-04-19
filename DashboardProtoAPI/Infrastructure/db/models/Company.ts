import {
  Model,
  DataTypes,
  Association
} from "sequelize";

interface CompanyAttributes {
  id: number;
  name: string;
  address: string;
  website: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date | null;
}

module.exports = (sequelize: any, DataTypes:any) => {
  class Company extends Model <CompanyAttributes> 
  implements CompanyAttributes {
    public id!: number;
    public name!: string;
    public address!: string;
    public website!: string;
    public email!: string;
    public phone!: string;
    public createdAt!: Date;
    public updatedAt!: Date | null;

    static associate(models: any) {
      Company.hasMany(models.User, {
        sourceKey: "id",
        foreignKey: "companyId",
      });
      // Company.belongsToMany(models.Asset, {
      //   through: models.CompanyAsset,
      //   foreignKey: 'companyId'
      // }) 
    }
  }
  Company.init({
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
    } ,
    createdAt: {
      allowNull: false,
      defaultValue: new Date(),
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      defaultValue: new Date(),
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Company',
    tableName: 'companies'
  });
  
  return Company
}
 

  // CompanyEntity.belongsToMany(AssetEntity, {
  //   through: "company_assets",
  //   foreignKey: "companyId",
  //   otherKey: "assetId",
  //   as: "assets"
  // });