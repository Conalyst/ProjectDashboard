import {Router, Request, Response} from 'express'
import { CompanyAssetsApi } from '../controllers/CompanyAssets'

const companyAssetsApi = new CompanyAssetsApi();

const companyAssetsRouter = Router();


companyAssetsRouter.get("/:id", (req, res) => {     
  companyAssetsApi.getAssetsByCompanyId(req, res);    
})

export default companyAssetsRouter;
