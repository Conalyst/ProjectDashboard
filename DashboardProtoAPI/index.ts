import express from 'express'
import cors from 'cors';
require('dotenv').config()
const app = express();
import {TestApi} from './test'

const testApi = new TestApi();

const testRouter = express.Router();

const origin = {
  origin: '*',
}

app.use(cors(origin))
testRouter.get("/tests",
  (req, res) => {
     console.log("+++++++++++")
      testApi.getAll(req, res);
    
  }
)
app.use('/api/v2', testRouter)
const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`App listening on PORT ${port}`));


// init asset_routes branch