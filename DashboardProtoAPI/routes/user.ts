import {Router, Request, Response} from 'express'
import { UserApi } from '../controllers/User'

const userApi = new UserApi();

const userRouter = Router();


userRouter.get("/",
  (req, res) => {
     
      userApi.getAll(req, res);
    
  }
)
userRouter.post("/",
  (req, res) =>{
    userApi.create(req, res)
  }
)

userRouter.post("/login", 
 (req, res) => userApi.login(req, res)
);

export default userRouter;