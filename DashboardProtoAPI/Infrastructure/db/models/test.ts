import {
  Model,
  DataTypes
} from "sequelize";
import {sequelize}  from '../config/sequelize'
interface TestAttributes {
  id: number;
  title: string;
}

 export  class TestEntity extends Model <TestAttributes> 
  implements TestAttributes {
    public id!: number;
    public title!: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  TestEntity.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true
    },
    title:{
      type:DataTypes.STRING,
      allowNull:false
    } 
  }, {
    sequelize,
    modelName: 'Test',
  });
 