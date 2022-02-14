"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const app = (0, express_1.default)();
const test_1 = require("./test");
const models_1 = __importDefault(require("./Infrastructure/db/models"));
const testApi = new test_1.TestApi();
const testRouter = express_1.default.Router();
testRouter.get('/tests', (req, res) => {
    testApi.getAll(req, res);
});
app.use('/api/v1', testRouter);
models_1.default.sequelize.sync().then(() => {
    app.listen(() => {
        console.log(`App listening on port ${process.env.PORT}`);
    });
});
