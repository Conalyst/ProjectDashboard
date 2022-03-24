"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const passport = require("passport");
require('dotenv').config();
require("./Infrastructure/Auth/passport");
const app = (0, express_1.default)();
const test_1 = require("./test");
const user_1 = require("./routes/user");
const asset_1 = require("./routes/asset");
// create API 
const testApi = new test_1.TestApi();
const userApi = new user_1.UserApi();
const assetApi = new asset_1.AssetApi();
//create router
const testRouter = express_1.default.Router();
const userRouter = express_1.default.Router();
const assetRouter = express_1.default.Router();
const origin = {
    origin: '*',
};
app.use((0, cors_1.default)(origin));
app.use(body_parser_1.default.json());
//endpoints tests
testRouter.get("/tests", passport.authenticate("jwt", { session: false }), (req, res) => {
    testApi.getAll(req, res);
});
testRouter.post("/tests", (req, res) => testApi.create(req, res));
//endpoints users
userRouter.get("/users", (req, res) => {
    userApi.getAll(req, res);
});
userRouter.post("/users", (req, res) => {
    userApi.create(req, res);
});
userRouter.post("/login", (req, res) => userApi.login(req, res));
assetRouter.get("/assets", (req, res) => {
    assetApi.getAllAssets(req, res);
});
assetRouter.get("/assets/:id", (req, res) => {
    assetApi.getAssetsById(req, res);
});
app.use('/api/v2', assetRouter);
app.use('/api/v2', testRouter);
app.use('/api/v2', userRouter);
const port = process.env.PORT || 3002;
// db.sequelize.sync().then(() => {
app.listen(port, () => console.log(`App listening on PORT ${port}`));
// })
