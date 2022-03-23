import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
require("dotenv").config();
const app = express();
import { TestApi } from "./test";
import { AssetApi } from "./routes/asset";
import db from "./Infrastructure/db/models";

import { AssetEntity as Asset } from "./Infrastructure/db/models/Asset";
import { CompanyAssetEntity as CompanyAsset } from "./Infrastructure/db/models/CompanyAsset";
import { CompanyEntity as Company } from "./Infrastructure/db/models/Company";
import { AssetCategoryEntity } from "./Infrastructure/db/models/AssetCategory";

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
router.get("/assets/:id", (req, res) => {
  assetApi.getAssetsById(req,res); 
});

// get a company asset list
router.get("/company/:id/assets", async (req: Request, res: Response) => {
  let companyId = req.params.id;
  console.log("assetCompany id is:", companyId);
  //////// ----------version 1
  // Asset.belongsToMany(Company, {
  //   through: CompanyAsset, 
  //   foreignKey:  { name: 'assetId', allowNull: false }
  //   // // foreignKey: 'assetId',
  //   // // otherKey: 'companyId'
  // })
  // Company.belongsToMany(Asset, {
  //   through: CompanyAsset,
  //   foreignKey:  { name: 'companyId', allowNull: false } 
  //   // foreignKey: 'companyId',
  //   // otherKey: 'assetId'
  // }) 

  //////// ----------version 2

  Asset.belongsToMany(Company, {
    through: "company_assets", 
    foreignKey:  { name: 'assetId', allowNull: false }
    // // foreignKey: 'assetId',
    // // otherKey: 'companyId'
  })
  Company.belongsToMany(Asset, {
    through: "company_assets",
    foreignKey:  { name: 'companyId', allowNull: false } 
    // foreignKey: 'companyId',
    // otherKey: 'assetId'
  }) 

  console.log(Company);
  try {
    const record = await Company.findAll({where: {id: companyId}, 
                                          include: [
                                            {model: Asset, attributes: ["title"]}
                                        ]
                                        });
    // const record = await Company.findAll({where: {id: companyId}});
    // console.log(record);
    return res.json({ record, msg: "find this company assets" });
  } catch (err) {
    console.log(err);
    return res.json({
      msg: " failed to find this company assets",
      status: 500,
      route: "/company/:id/assets",
    });
  }
});

const port = process.env.PORT || 3002;
// db.sequelize.sync().then(() => {
app.listen(port, () => console.log(`App listening on PORT ${port}`));
// })
