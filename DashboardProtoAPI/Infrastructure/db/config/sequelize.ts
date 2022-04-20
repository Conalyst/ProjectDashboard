import  config from './config.json'
const env = process.env.NODE_ENV ||'development';
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
    dialect: sequelizeConfig.DIALECT
  });

//   export const sequelize = new Sequelize("postgres://bjyajelegqkjvz:2b425602250544952f2d26b08771a55c17c5a3dfd84fa2ff372c9813e8730223@ec2-34-194-158-176.compute-1.amazonaws.com:5432/deram2iivs2qoa")

