import {
    Model,
    DataTypes,
    Association
  } from "sequelize";
  
  
  interface RoleAttributes {
    id: number;
    name: string;
  }
  
  module.exports = (sequelize: any, DataTypes:any) => {
  class Role extends Model <RoleAttributes> 
    implements RoleAttributes {
      public id!: number;
      public name!: string;
   
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
  
      static associate(models: any) {
        Role.hasMany(models.User, {
          sourceKey: "id",
          foreignKey: "roleId",
          // as: "users",
        });
      }
    }
    Role.init({
      id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true
      },
      name:{
        type:DataTypes.STRING,
        allowNull:false
      } 
    }, {
      sequelize,
      modelName: 'Role',
      tableName: 'roles'
    });
  
    return Role
  }