import {
  Model,
  DataTypes,
  Association
} from "sequelize";
import {sequelize}  from '../config/sequelize'
import { UserEntity } from "./user";
interface ClientAttributes {
  id: number;
  name: string;
}
export  class ClientEntity extends Model <ClientAttributes> 
implements ClientAttributes {
  public id!: number;
  public name!: string;

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  public static associations:{
    // define association here
    users: Association<ClientEntity, UserEntity>;
  }
}
 
  ClientEntity.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
     
  }, {
    sequelize,
    modelName: 'Client',
  });
 
  ClientEntity.hasMany(UserEntity, {
    sourceKey: "id",
    foreignKey: "clientId",
    as: "Users",
  });
 
 
 