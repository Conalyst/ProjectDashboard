import express from 'express'
import cors from 'cors';
import db from './Infrastructure/db/models'
// import dbInit from './Infrastructure/db/init'
// dbInit()
require('dotenv').config()
const app = express();

import routes from './routes'


const origin = {
  origin: '*',
}
 app.use(cors(origin))
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use('/api/v2', routes)



const port = process.env.PORT || 5000;
 db.sequelize.sync({ alter: true }).then(() => {
  // db.sequelize.sync({ force: true }).then(() => {
  console.log("Welcome.......")
  app.listen(port, () => console.log(`App listening on PORT ${port}`));
 })






