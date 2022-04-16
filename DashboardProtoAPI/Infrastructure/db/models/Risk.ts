'use strict';
import {
  Model,
  UUIDV4,
  
}  from 'sequelize';

interface RiskAttributes {
  id: number;
  category: string;
  title: string;
  description: string;
  impact: string;
  likelihood: string;
  rating: string;
  createdAt: Date;
  updatedAt: Date | null;
}

module.exports = (sequelize: any, DataTypes:any) => {
  class Risk extends Model <RiskAttributes> 
  implements RiskAttributes {
    public id!: number;
    public category!: string;
    public title!: string;
    public description!: string;
    public impact!: string;
    public likelihood!: string;
    public rating!: string;
    public createdAt!: Date;
    public updatedAt!: Date | null;

    static associate(models: any) {
      
      Risk.belongsToMany(models.Asset, {
        through: models.RiskAsset,
        foreignKey: 'riskId' 
      }) 
    }
  }
  Risk.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true
    },
    category:{
      type:DataTypes.TEXT,
      allowNull: false,
    },
    title:{
      type:DataTypes.TEXT,
      // allowNull:false
    } ,
    description:{
      type:DataTypes.TEXT,
      // allowNull:false
    } ,
    impact:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    likelihood: {
      type: DataTypes.STRING,
      allowNull: false,
    } ,
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: 'Risk',
    tableName: 'risks'
  });
  return Risk;
}
