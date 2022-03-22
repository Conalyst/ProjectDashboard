import {
  Model,
  DataTypes,
  Association
} from "sequelize";
import {sequelize}  from '../config/sequelize'
import { UserEntity } from "./user";
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
   public static associations:{
    // define association here
    users: Association<RoleEntity, UserEntity>;
  }
}
 
  RoleEntity.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING
     
  }, {
    sequelize,
    modelName: 'Role',
  });

  RoleEntity.hasMany(UserEntity, {
    sourceKey: "id",
    foreignKey: "roleId",
    as: "Users",
  });
 
 