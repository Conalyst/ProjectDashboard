import {Router, Request, Response} from 'express'
import { CompanyAssetsApi } from '../controllers/CompanyAssets'

const companyAssetsApi = new CompanyAssetsApi();

const companyAssetsRouter = Router();


// assetRouter.get("/", (req: Request, res: Response) => {     
//     return res.status(200).send("Hello World");    
//   }
// )

// assetRouter.get("/", (req, res) => {     
//   companyAssetApi.getAllAssets(req, res);    
// })

companyAssetsRouter.get("/:id", (req, res) => {     
  companyAssetsApi.getAssetsByCompanyId(req, res);    
})

export default companyAssetsRouter;
