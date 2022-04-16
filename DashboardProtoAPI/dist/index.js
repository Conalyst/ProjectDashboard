"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const models_1 = __importDefault(require("./Infrastructure/db/models"));
// import dbInit from './Infrastructure/db/init'
// dbInit()
require('dotenv').config();
const app = (0, express_1.default)();
const routes_1 = __importDefault(require("./routes"));
const origin = {
    origin: '*',
};
app.use((0, cors_1.default)(origin));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v2', routes_1.default);
const port = process.env.PORT || 5000;
models_1.default.sequelize.sync({ alter: true }).then(() => {
    console.log("Welcome.......");
    app.listen(port, () => console.log(`App listening on PORT ${port}`));
});
