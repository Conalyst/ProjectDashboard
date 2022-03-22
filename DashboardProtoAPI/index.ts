import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
const passport = require("passport");
require('dotenv').config()
require("./Infrastructure/Auth/passport");
const app = express();
import {TestApi} from './test'
import { UserApi } from './user';
// create API 
const testApi = new TestApi();
const userApi = new UserApi();

//create router
const testRouter = express.Router();
const userRouter = express.Router();

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
userRouter.post('/users',
  (req, res) =>{
    userApi.create(req, res)
  }
)
userRouter.post("/login", 
 (req, res) => userApi.login(req, res)
);
app.use('/api/v2', testRouter)
app.use('/api/v2', userRouter)
const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`App listening on PORT ${port}`));
