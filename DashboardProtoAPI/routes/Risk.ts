import {Router, Request, Response} from 'express'
import { RiskApi }  from '../controllers/Risk'

const riskApi = new RiskApi();

const riskRouter = Router();


riskRouter.get("/", (req, res) => {     
  riskApi.getAllRisks(req, res);    
})

riskRouter.get("/:id", (req, res) => {     
  riskApi.getRiskById(req, res);    
})

riskRouter.post("/", (req, res) =>{
    riskApi.create(req, res)
})


riskRouter.put("/:id", (req, res) =>{
    riskApi.update(req, res)
})

export default riskRouter;
