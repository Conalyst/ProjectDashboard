"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asset_1 = __importDefault(require("./asset"));
const CompanyAssets_1 = __importDefault(require("./CompanyAssets"));
const router = (0, express_1.Router)();
router.use('/assets', asset_1.default);
router.use('/assets/company', CompanyAssets_1.default);
exports.default = router;
