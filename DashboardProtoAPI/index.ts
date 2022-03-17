import express from 'express'
import cors from 'cors';
require('dotenv').config()
const app = express();
import {TestApi} from './test'
import { AssetApi } from './routes/asset'
import db from './Infrastructure/db/models'

const testApi = new TestApi();
const assetApi = new AssetApi();

const router = express.Router();

const origin = {
  origin: '*',
}
app.use(cors(origin))


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

router.get("/assets/:id", (req, res) => {     
  assetApi.getAssetsById(req, res);    
})

app.use('/api/v2', router)
// app.use('/api/v2', assetRouter)


const port = process.env.PORT || 3002;
// db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`App listening on PORT ${port}`));
// })

