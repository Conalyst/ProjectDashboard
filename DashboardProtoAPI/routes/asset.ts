import {Router, Request, Response} from 'express'
import { AssetApi } from '../controllers/asset'

const assetApi = new AssetApi();

const assetRouter = Router();


// assetRouter.get("/", (req: Request, res: Response) => {     
//     return res.status(200).send("Hello World");    
//   }
// )

assetRouter.get("/", (req, res) => {     
  assetApi.getAllAssets(req, res);    
})

assetRouter.get("/:id", (req, res) => {     
  assetApi.getAssetsById(req, res);    
})

export default assetRouter;
