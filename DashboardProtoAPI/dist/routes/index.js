"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asset_1 = __importDefault(require("./asset"));
const Test_1 = __importDefault(require("./Test"));
const user_1 = __importDefault(require("./user"));
const CompanyAssets_1 = __importDefault(require("./CompanyAssets"));
const Vulnerability_1 = __importDefault(require("./Vulnerability"));
const AssetVulnerability_1 = __importDefault(require("./AssetVulnerability"));
const Threat_1 = __importDefault(require("./Threat"));
const VulnerabilityThreat_1 = __importDefault(require("./VulnerabilityThreat"));
const Risk_1 = __importDefault(require("./Risk"));
const RiskAsset_1 = __importDefault(require("./RiskAsset"));
const express_2 = __importDefault(require("express"));
const router = (0, express_1.Router)();
// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    // Serve the frontend's index.html file at the root route
    router.get('/', (req, res) => {
        // res.cookie('XSRF-TOKEN', req.csrfToken());
        res.sendFile(path.resolve(__dirname, '../../DashboardProtoUI', 'build', 'index.html'));
    });
    // // Serve the static assets in the frontend's build folder
    router.use(express_2.default.static(path.resolve("__dirname, '../../DashboardProtoUI/build")));
    // // Serve the frontend's index.html file at all other routes NOT starting with /api
    router.get(/^(?!\/?api).*/, (req, res) => {
        // res.cookie('XSRF-TOKEN', req.csrfToken());
        res.sendFile(path.resolve(__dirname, '../../DashboardProtoUI', 'build', 'index.html'));
    });
}
// Add a XSRF-TOKEN cookie in development
// if (process.env.NODE_ENV == 'production') {
//   router.get('/api/csrf/restore', (req, res) => {
//     // res.cookie('XSRF-TOKEN', req.csrfToken());
//     res.status(201).json({});
//   });
// }
// router.get('/', (req, res) => {
//   res.sendFile(path.resolve( __dirname,'../../DashboardProtoUI', 'build', 'index.html'))
// })
router.use('/assets', asset_1.default);
router.use('/assets/company', CompanyAssets_1.default);
router.use('/users', user_1.default);
// this is just a test of authorization
router.use('/tests', Test_1.default);
router.use('/vulnerabilities', Vulnerability_1.default);
router.use('/asset-vulnerability', AssetVulnerability_1.default);
router.use('/threats', Threat_1.default);
router.use('/vulnerability-threat', VulnerabilityThreat_1.default);
router.use('/risks', Risk_1.default);
router.use('/risk-asset', RiskAsset_1.default);
exports.default = router;
