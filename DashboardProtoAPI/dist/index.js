"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const app = (0, express_1.default)();
const test_1 = require("./test");
const asset_1 = require("./routes/asset");
const testApi = new test_1.TestApi();
const assetApi = new asset_1.AssetApi();
const router = express_1.default.Router();
const origin = {
    origin: '*',
};
app.use((0, cors_1.default)(origin));
router.get("/", (req, res) => {
    return ("Hello World");
});
router.get("/tests", (req, res) => {
    testApi.getAll(req, res);
});
router.get("/assets", (req, res) => {
    assetApi.getAllAssets(req, res);
});
router.get("/assets/:id", (req, res) => {
    assetApi.getAssetsById(req, res);
});
app.use('/api/v2', router);
// app.use('/api/v2', assetRouter)
const port = process.env.PORT || 3002;
// db.sequelize.sync().then(() => {
app.listen(port, () => console.log(`App listening on PORT ${port}`));
// })
