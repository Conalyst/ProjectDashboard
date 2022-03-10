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
const testApi = new test_1.TestApi();
const testRouter = express_1.default.Router();
const origin = {
    origin: '*',
};
app.use((0, cors_1.default)(origin));
testRouter.get("/tests", (req, res) => {
    console.log("+++++++++++");
    testApi.getAll(req, res);
});
app.use('/api/v2', testRouter);
const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`App listening on PORT ${port}`));
// init asset_routes branch
