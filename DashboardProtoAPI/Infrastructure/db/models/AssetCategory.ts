'use strict';
import {
  Model,
  UUIDV4,
  
}  from 'sequelize';

interface AssetCategoryAttributes {
  id: number;
  name: string;

}

module.exports = (sequelize: any, DataTypes:any) => {
  class AssetCategory extends Model <AssetCategoryAttributes> 
  implements AssetCategoryAttributes {
    public id!: number;
    public name!: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // User.belongsToMany(models.Project, {
      //   through: 'ProjectAssignments'
      // })
      AssetCategory.hasMany(models.Asset, {
        foreignKey: 'categoryId'
      })
    }
  }
  AssetCategory.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    } 
  }, {
    sequelize,
    modelName: 'AssetCategory',
    tableName: 'asset_categories'
  });
  return AssetCategory
}
