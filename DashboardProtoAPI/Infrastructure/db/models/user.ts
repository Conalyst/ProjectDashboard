import {
  Model,
  DataTypes
} from "sequelize";
import {sequelize}  from '../config/sequelize'
import {CompanyEntity} from './Company'
import {RoleEntity} from './Role'

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  companyId: number;
  roleId: number;
  createdAt: Date;
}

 export  class UserEntity extends Model <UserAttributes> 
  implements UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public companyId!: number;
    public roleId!: number;
    public createdAt!: Date;
    public updatedAt!: Date  | null;;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      UserEntity.belongsTo(CompanyEntity);
      CompanyEntity.hasMany(UserEntity);
      
      UserEntity.belongsTo(RoleEntity);
      RoleEntity.hasMany(UserEntity);
    }
  }
  UserEntity.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true
    },
    name:{
      type:DataTypes.STRING,
      allowNull:true
    } ,
    email:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    password:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    } ,
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,     
  }, {
    sequelize,
    modelName: 'users'
  });