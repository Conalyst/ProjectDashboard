import {Router, Request, Response} from 'express'
import { TestApi } from '../controllers/Test'
const passport = require("passport");
// require('dotenv').config()
require("../Infrastructure/Auth/passport");

const testApi = new TestApi();

const testRouter = Router();


testRouter.get("/", passport.authenticate("jwt", { session: false }),
  (req, res) => {
     
      testApi.getAll(req, res);
    
  })
  testRouter.post("/", 
 (req, res) => testApi.create(req, res)
);

export default testRouter;
