import {Router, Request, Response} from 'express'
import { RiskAssetApi } from '../controllers/RiskAsset'

const riskAssetApi = new RiskAssetApi();
const riskAssetRouter = Router();

riskAssetRouter.get("/:id", (req, res) => {     
  riskAssetApi.getByRiskId(req, res);    
})

riskAssetRouter.post("/", (req, res) =>{
  riskAssetApi.create(req, res)
})

export default  riskAssetRouter;