"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEntity = void 0;
const models_1 = __importDefault(require("../../Infrastructure/db/models"));
const toEntity = (ThreatDto) => {
    let threatEntity = new models_1.default.Threat();
    threatEntity.id = ThreatDto.Id;
    threatEntity.category = ThreatDto.category;
    threatEntity.agent = ThreatDto.agent;
    threatEntity.title = ThreatDto.title;
    threatEntity.description = ThreatDto.description;
    threatEntity.impact = ThreatDto.impact;
    threatEntity.likelihood = ThreatDto.likelihood;
    threatEntity.rating = ThreatDto.rating;
    return threatEntity;
};
exports.toEntity = toEntity;
