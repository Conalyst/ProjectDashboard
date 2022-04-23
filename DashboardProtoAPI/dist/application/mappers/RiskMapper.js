"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEntity = void 0;
const models_1 = __importDefault(require("../../Infrastructure/db/models"));
const toEntity = (riskDto) => {
    let riskEntity = new models_1.default.Risk();
    riskEntity.id = riskDto.Id;
    riskEntity.category = riskDto.category;
    riskEntity.title = riskDto.title;
    riskEntity.description = riskDto.description;
    riskEntity.impact = riskDto.impact;
    riskEntity.likelihood = riskDto.likelihood;
    riskEntity.rating = riskDto.rating;
    return riskEntity;
};
exports.toEntity = toEntity;
