import express, { NextFunction, Request, Response } from "express";
import cors from 'cors';
require('dotenv').config()
const app = express();
import {TestApi} from './test'
import { AssetApi } from './routes/asset'
import db from './Infrastructure/db/models'

import  {AssetEntity as Asset}  from "./Infrastructure/db/models/Asset"


const testApi = new TestApi();
const assetApi = new AssetApi();

const router = express.Router();

const origin = {
  origin: '*',
}
app.use(cors(origin))

app.use('/api/v2', router)
// app.use('/api/v2', assetRouter)


router.get("/", (req, res) => {     
    return ("Hello World");    
  }
)

router.get("/tests", (req, res) => {     
      testApi.getAll(req, res);    
  }
)

router.get("/assets", (req, res) => {     
  assetApi.getAllAssets(req, res);    
})

router.get("/assets/:id", async (req: Request, res: Response) => {
  let assetId = req.params.id;
  console.log("asset id is:" , assetId);
  try {
    const record = await Asset.findOne({ where: { id: assetId } });
    return res.json({ record, msg: "find this record" });
  } catch (err) {
    return res.json({
      msg: " failed to find this asset",
      status: 500,
      route: "/assets/:id",
    });
  }
})




const port = process.env.PORT || 3002;
// db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`App listening on PORT ${port}`));
// })

