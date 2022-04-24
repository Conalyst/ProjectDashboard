"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const models_1 = __importDefault(require("./Infrastructure/db/models"));
require('dotenv').config();
const routes_1 = __importDefault(require("./routes"));
// import dbInit from './Infrastructure/db/init'
// dbInit()
const path = require('path');
const app = (0, express_1.default)();
const origin = {
    origin: '*',
};
app.use((0, cors_1.default)(origin));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v2', routes_1.default);
//  app.use(express.static(path.resolve("__dirname, '../DashboardProtoUI/build")));
app.use(express_1.default.static(path.resolve("__dirname, 'build")));
//  app.get("/api/v2/", (req,res) => {
//   //  res.send("Welcome...")
//    res.sendFile(path.join(__dirname+'../../DashboardProtoUI/build/index.html'));
//  })
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const port = process.env.PORT || 5000;
models_1.default.sequelize
    .sync({ force: true })
    .then(() => {
    app.listen(port, () => console.log(`App listening on PORT ${port}`));
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
