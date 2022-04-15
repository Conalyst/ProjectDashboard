import {
  Model,
  DataTypes,
  Association
} from "sequelize";
import { PrimaryKey } from "sequelize-typescript";

interface RiskAssetAttributes {
  id:number
  riskId: number;
  assetId: number;
  createdAt: Date;
  updatedAt: Date | null;
}

module.exports = (sequelize: any, DataTypes:any) => {
  class RiskAsset extends Model <RiskAssetAttributes> 
  implements RiskAssetAttributes {
    public id!: number;
    public riskId!: number;
    public assetId!: number;
    public createdAt!: Date;
    public updatedAt!: Date | null;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

 
    static associate(models: any) {
      RiskAsset.belongsTo(models.Risk, {
        foreignKey: 'riskId'
      })
      RiskAsset.belongsTo(models.Asset, {
        foreignKey: 'assetId',
      })
    }
  }
  
  RiskAsset.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true
    },
    riskId:{
      type:DataTypes.INTEGER,
      allowNull: false,
      // unique: true,
      references: {
        model: 'Risk',
        key: 'id'
      }
    },
    assetId:{
      type:DataTypes.INTEGER,
      allowNull: false,
      // unique: true,
      references: {
        model: 'Asset',
        key: 'id'
      }
    },
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
    modelName: 'RiskAsset',
    tableName: 'risk_assets'
  });
  return RiskAsset
}