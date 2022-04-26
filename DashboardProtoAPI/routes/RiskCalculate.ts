import {Router, Request, Response} from 'express'
import { RiskAssetApi }  from '../controllers/RiskAsset'

const riskAssetApi = new RiskAssetApi();

const riskCalculateRouter = Router();


// riskCalculateRouter.get("/:id", (req, res) => {     
//   riskAssetApi.getCalculatedRisk(req, res);    
// })


export default riskCalculateRouter;
