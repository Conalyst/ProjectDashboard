import {
  Model,
} from "sequelize";
import {sequelize}  from '../config/sequelize'
interface TestAttributes {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date | null;
}

module.exports = (sequelize: any, DataTypes:any) => {
 class Test extends Model <TestAttributes> 
  implements TestAttributes {
    public id!: number;
    public title!: string;
    public createdAt!: Date;
    public updatedAt!: Date | null;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Test.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true
    },
    title:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: {
      type: new DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test
}