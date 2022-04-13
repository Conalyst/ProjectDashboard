'use strict';
import {
  Model,
  UUIDV4,
  
}  from 'sequelize';

interface ThreatAttributes {
  id: number;
  category: string;
  agent: string;
  title: string;
  description: string;
  impact: string;
  likelihood: string;
  rating: string;
  createdAt: Date;
  updatedAt: Date | null;
}

module.exports = (sequelize: any, DataTypes:any) => {
  class Threat extends Model <ThreatAttributes> 
  implements ThreatAttributes {
    public id!: number;
    public category!: string;
    public agent!: string;
    public title!: string;
    public description!: string;
    public impact!: string;
    public likelihood!: string;
    public rating!: string;
    public createdAt!: Date;
    public updatedAt!: Date | null;

    static associate(models: any) {
      // Asset.belongsTo(models.AssetCategory, {
      //   foreignKey: 'categoryId',
      // })
      Threat.belongsToMany(models.Vulnerability, {
        through: models.VulnerabilityThreat,
        foreignKey: 'threatId' 
      }) 
    }
  }
  Threat.init({
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
    agent:{
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
    modelName: 'Threat',
    tableName: 'threats'
  });
  return Threat;
}
