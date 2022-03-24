import {
  Model,
  DataTypes,
  Association
} from "sequelize";
import {sequelize}  from '../config/sequelize'
import { UserEntity } from './User'
import {ValenciaEntity} from './Valencia'

interface RoleAttributes {
  id: number;
  name: string;
}

 export  class RoleEntity extends Model <RoleAttributes> 
  implements RoleAttributes {
    public id!: number;
    public name!: string;
 
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models: any) {
      RoleEntity.hasMany(UserEntity, {
        sourceKey: "id",
        foreignKey: "roleId",
        as: "users",
      });
      RoleEntity.hasMany(ValenciaEntity, {
        sourceKey: "id",
        foreignKey: "roleId",
        as: "valencia",
      });
    }
  }
  RoleEntity.init({
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
    modelName: 'Role',
    tableName: 'roles'
  });
 
