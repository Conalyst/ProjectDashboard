import express from 'express'
import cors from 'cors';
import db from './Infrastructure/db/models'
require('dotenv').config()
import routes from './routes'
// import dbInit from './Infrastructure/db/init'
// dbInit()

const path = require('path');
const app = express();
// const origin = {
//   origin: '*',
// }
  app.use(cors())
 
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

 app.use(express.static(path.join(__dirname + "../../DashboardProtoUI/build")));




app.use('/api/v2', routes)
// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.append('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
//   next();
// });
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '../DashboardProtoUI/build/index.html'));
// });
const port = process.env.PORT || 5000;
 db.sequelize
 .sync({ force: true })
 .then(() => {
  app.listen(port, () => console.log(`App listening on PORT ${port}`));
 })
 .catch(err => {
  console.error('Unable to connect to the database:', err);
 });





