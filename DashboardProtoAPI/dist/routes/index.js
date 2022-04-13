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
const router = (0, express_1.Router)();
router.use('/assets', asset_1.default);
router.use('/assets/company', CompanyAssets_1.default);
router.use('/users', user_1.default);
router.use('/', user_1.default);
// this is just a test of authorization
router.use('/tests', Test_1.default);
router.use('/vulnerabilities', Vulnerability_1.default);
router.use('/asset/vulnerability', AssetVulnerability_1.default);
router.use('/threats', Threat_1.default);
router.use('/vulnerability/threat', VulnerabilityThreat_1.default);
exports.default = router;
