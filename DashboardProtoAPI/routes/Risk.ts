import {Router, Request, Response} from 'express'
import { RiskApi }  from '../controllers/Risk'

const riskApi = new RiskApi();

const riskRouter = Router();


riskRouter.get("/", (req, res) => {     
  riskApi.getAllRisks(req, res);    
})

riskRouter.post("/", (req, res) =>{
    riskApi.create(req, res)
})

riskRouter.get("/static", (req, res) => {     
  riskApi.getStaticRisks(req, res);    
})
riskRouter.put("/:id", (req, res) =>{
    riskApi.update(req, res)
})

riskRouter.delete('/:id' ,(req, res) => {
  riskApi.delete(req, res)
})

export default riskRouter;
