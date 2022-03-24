import {
  Model,
  DataTypes,
  Association
} from "sequelize";

import {sequelize}  from '../config/sequelize'

interface ValenciaAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  roleId: number;
}

 export  class ValenciaEntity extends Model <ValenciaAttributes> 
  implements ValenciaAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public roleId!: number;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    public static associations: { 
      
    };

    static associate(models: any) {
      // define association here
      
      // clients: Association<UserEntity, ClientEntity>
    }
  }
  ValenciaEntity.init({
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
    email:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    password:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    roleId:{
      type:DataTypes.INTEGER,
      allowNull:true
    } 
  }, {
    sequelize,
    modelName: 'Valencia',
    tableName: 'valencia'
  });
  
