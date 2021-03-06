import {Router, Request, Response} from 'express'
import { AssetApi } from '../controllers/Asset'
const passport = require("passport");
const assetApi = new AssetApi();

const assetRouter = Router();


assetRouter.get("/", (req, res) => {     
  assetApi.getAllAssets(req, res);    
})
 
assetRouter.get("/static/", (req, res) => {     
  assetApi.getStaticAssets(req, res);    
})
 
assetRouter.get("/bar-stats/", (req, res) => {     
  assetApi.getStatsForBarChart(req, res);    
})

 
assetRouter.get("/:id", (req, res) => {     
  assetApi.getAssetsById(req, res);    
})

assetRouter.post("/", (req, res) =>{
    assetApi.create(req, res)
})

assetRouter.put("/:id", (req, res) =>{
    assetApi.update(req, res)
})
assetRouter.delete('/:id' ,(req, res) => {
  assetApi.delete(req, res)
})



export default assetRouter;
