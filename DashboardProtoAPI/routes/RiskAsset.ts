import {Router, Request, Response} from 'express'
import { RiskAssetApi } from '../controllers/RiskAsset'

const riskAssetApi = new RiskAssetApi();
const riskAssetRouter = Router();



riskAssetRouter.post("/", (req, res) =>{
  riskAssetApi.create(req, res)
})

riskAssetRouter.get("/riskcalc", (req, res) => {     
  riskAssetApi.getCalculatedRisk(req, res);    
})

riskAssetRouter.get("/:id", (req, res) => {     
  riskAssetApi.getByRiskId(req, res);    
})
export default  riskAssetRouter;