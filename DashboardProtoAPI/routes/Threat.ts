import {Router, Request, Response} from 'express'
import { ThreatApi } from '../controllers/Threat'
const passport = require("passport");
const threatApi = new ThreatApi();

const threatRouter = Router();


threatRouter.get("/", (req, res) => {     
  threatApi.getAllThreats(req, res);    
})

threatRouter.get("/:id" ,passport.authenticate("jwt", { session: false }), (req, res) => {     
  threatApi.getThreatById(req, res);    
})

threatRouter.post("/" ,passport.authenticate("jwt", { session: false }), (req, res) =>{
    threatApi.create(req, res)
})


threatRouter.put("/:id" ,passport.authenticate("jwt", { session: false }), (req, res) =>{
    threatApi.update(req, res)
})
threatRouter.delete('/:id' ,passport.authenticate("jwt", { session: false }),
  (req, res) => threatApi.delete(req, res)
)
export default threatRouter;