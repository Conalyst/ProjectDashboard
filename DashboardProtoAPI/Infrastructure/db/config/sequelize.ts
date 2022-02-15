import  config from './config.json'
const env = 'development';
import {Sequelize} from "sequelize";
console.log(env)
const sequelizeConfig={
    DBNAME: config[env].database,
    USERNAME: config[env].username,
    PASSWORD: config[env].password,
    HOST: config[env].host,
    DIALECT: config[env].dialect
}

export const sequelize = new Sequelize(sequelizeConfig.DBNAME, sequelizeConfig.USERNAME, sequelizeConfig.PASSWORD, {
    host: sequelizeConfig.HOST,
    dialect: 'postgres'
  });
