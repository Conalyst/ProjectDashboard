'use strict';
import {
  Model,
  UUIDV4,
  
}  from 'sequelize';
// import sequelize from 'sequelize/types/sequelize';

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  companyId: number;
  roleId: number;
  createdAt: Date;
  updatedAt: Date | null;
}

module.exports = (sequelize: any, DataTypes:any) => {
  class User extends Model <UserAttributes> 
  implements UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public companyId!: number;
    public roleId!: number;
    public createdAt!: Date;
    public updatedAt!: Date | null;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      User.belongsTo(models.Company, {
        targetKey: 'id',
        foreignKey: 'companyId'
      })
      User.belongsTo(models.Role, {
        targetKey: 'id',
        foreignKey: 'roleId'
      })
    }
  }
  User.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique: true
    } ,
    password:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    } ,
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: 'User',
    tableName: 'users'
  });
  
  return User;
}
