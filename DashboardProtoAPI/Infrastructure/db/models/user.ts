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

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      User.belongsTo(models.Company, {
        foreignKey: 'companyId'
      })
      User.belongsTo(models.Role, {
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
    }       
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  
  return User;
}
