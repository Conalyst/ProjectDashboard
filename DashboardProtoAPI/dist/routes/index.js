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
const router = (0, express_1.Router)();
router.use('/assets', asset_1.default);
router.use('/assets/company', CompanyAssets_1.default);
router.use('/users', user_1.default);
router.use('/', user_1.default);
// this is just a test of authorization
router.use('/tests', Test_1.default);
exports.default = router;
