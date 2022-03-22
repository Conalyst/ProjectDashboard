import {
  Model,
  DataTypes
} from "sequelize";
import {sequelize}  from '../config/sequelize'
interface UserAttributes {
  id: number;
  username: string;
  user_type: Enumerator ;
  password: string;
  createdAt: Date;
}
export  class UserEntity extends Model <UserAttributes> 
implements UserAttributes {
  public id!: number;
  public username!: string;
  public user_type!: Enumerator;
  public password!: string;
  public createdAt!: Date;
  public updatedAt!: Date  | null;;

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: any) {
    // define association here
  }
}
 
  UserEntity.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: DataTypes.STRING,
    user_type: DataTypes.ENUM('internal', 'external'),
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
  });

 
 
 