import {Router, Request, Response} from 'express'
import { ThreatApi } from '../controllers/Threat'

const threatApi = new ThreatApi();

const threatRouter = Router();


threatRouter.get("/", (req, res) => {     
  threatApi.getAllThreats(req, res);    
})

threatRouter.get("/:id", (req, res) => {     
  threatApi.getThreatById(req, res);    
})

export default threatRouter;
