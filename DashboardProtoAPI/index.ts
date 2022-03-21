import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
require("dotenv").config();
const app = express();
import { TestApi } from "./test";
import { AssetApi } from "./routes/asset";
import db from "./Infrastructure/db/models";

import { AssetEntity as Asset } from "./Infrastructure/db/models/Asset";
import { CompanyAssetEntity as CompanyAsset } from "./Infrastructure/db/models/CompanyAsset";

const testApi = new TestApi();
const assetApi = new AssetApi();

const router = express.Router();

const origin = {
  origin: "*",
};
app.use(cors(origin));

app.use("/api/v2", router);
// app.use('/api/v2', assetRouter)

router.get("/", (req, res) => {
  return "Hello World";
});

router.get("/tests", (req, res) => {
  testApi.getAll(req, res);
});

// get all asset list in database 
router.get("/assets", (req, res) => {
  assetApi.getAllAssets(req, res);
});

// get a specific asset information 
router.get("/assets/:id", async (req: Request, res: Response) => {
  let assetId = req.params.id;
  console.log("asset id is:", assetId);
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
});

// get a company asset list
router.get("/:companyId/assets", async (req: Request, res: Response) => {
  let companyId = req.params.companyId;
  console.log("assetCompany id is:", companyId);
  try {
    const record = await CompanyAsset.findAll({ 
                                                  where: { companyId: companyId}, 
                                                // include: [{model: Asset, 
                                                //   required: true}] 
                                                });
    return res.json({ record, msg: "find this company assets" });
  } catch (err) {
    return res.json({
      msg: " failed to find this company assets",
      status: 500,
      route: "/:companyId/assets",
    });
  }
});

const port = process.env.PORT || 3002;
// db.sequelize.sync().then(() => {
app.listen(port, () => console.log(`App listening on PORT ${port}`));
// })
