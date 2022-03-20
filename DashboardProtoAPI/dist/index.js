"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const Asset_1 = require("./Infrastructure/db/models/Asset");
const testApi = new test_1.TestApi();
const assetApi = new asset_1.AssetApi();
const router = express_1.default.Router();
const origin = {
    origin: '*',
};
app.use((0, cors_1.default)(origin));
app.use('/api/v2', router);
// app.use('/api/v2', assetRouter)
router.get("/", (req, res) => {
    return ("Hello World");
});
router.get("/tests", (req, res) => {
    testApi.getAll(req, res);
});
router.get("/assets", (req, res) => {
    assetApi.getAllAssets(req, res);
});
router.get("/assets/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let assetId = req.params.id;
    console.log("asset id is:", assetId);
    try {
        const record = yield Asset_1.AssetEntity.findOne({ where: { id: assetId } });
        return res.json({ record, msg: "find this record" });
    }
    catch (err) {
        return res.json({
            msg: " failed to find this asset",
            status: 500,
            route: "/assets/:id",
        });
    }
}));
const port = process.env.PORT || 3002;
// db.sequelize.sync().then(() => {
app.listen(port, () => console.log(`App listening on PORT ${port}`));
// })
