import {Router, Request, Response} from 'express'
import { AssetApi } from '../controllers/Asset'

const assetApi = new AssetApi();

const assetRouter = Router();


assetRouter.get("/", (req, res) => {     
  assetApi.getAllAssets(req, res);    
})

assetRouter.get("/:id", (req, res) => {     
  assetApi.getAssetsById(req, res);    
})

export default assetRouter;
