import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
const passport = require("passport");
require('dotenv').config()
require("./Infrastructure/Auth/passport");
const app = express();
import {TestApi} from './test'
 
import { UserApi } from './routes/user';
import { AssetApi } from './routes/asset'
// create API 
const testApi = new TestApi();
const userApi = new UserApi();
const assetApi = new AssetApi(); 
//create router
const testRouter = express.Router();
const userRouter = express.Router();
const assetRouter = express.Router();

const origin = {
  origin: '*',
}
app.use(cors(origin))
 
app.use(bodyParser.json())
//endpoints tests
testRouter.get("/tests",
passport.authenticate("jwt", { session: false }),
  (req, res) => {
     
      testApi.getAll(req, res);
    
  })
  testRouter.post("/tests", 
 (req, res) => testApi.create(req, res)
);

//endpoints users
userRouter.get("/users",
  (req, res) => {
     
      userApi.getAll(req, res);
    
  }
)
userRouter.post("/users",
  (req, res) =>{
    userApi.create(req, res)
  }
)
userRouter.post("/login", 
 (req, res) => userApi.login(req, res)
);

assetRouter.get("/assets", (req, res) => {     
  assetApi.getAllAssets(req, res);    
})

assetRouter.get("/assets/:id", (req, res) => {     
  assetApi.getAssetsById(req, res);    
})

app.use('/api/v2', assetRouter)
app.use('/api/v2', testRouter)
app.use('/api/v2', userRouter)
 

 
const port = process.env.PORT || 3002;
// db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`App listening on PORT ${port}`));
// })

