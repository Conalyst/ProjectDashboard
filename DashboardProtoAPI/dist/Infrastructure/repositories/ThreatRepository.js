"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreatRepository = void 0;
// import  {CompanyAssetEntity as Asset}  from "../db/models/ComanyAsset"
// import {AssetEntity} from '../db/models/Asset'
const sequelize_1 = __importDefault(require("sequelize"));
const models_1 = __importDefault(require("../db/models"));
const sequelize_2 = require("sequelize");
const Threat = require("../db/models");
class ThreatRepository {
    constructor() {
    }
    Get() {
        return __awaiter(this, void 0, void 0, function* () {
            let threats = yield models_1.default.Threat.findAll();
            return threats;
        });
    }
    GetByTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const threat = yield models_1.default.Threat.findOne({
                where: { title: `${title}` }
            });
            return threat;
        });
    }
    Create(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Threat.create(model['dataValues']);
        });
    }
    Update(model, id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("model..", model['dataValues']);
            return models_1.default.Threat.update(model['dataValues'], { where: { id: `${id}` } });
        });
    }
    delete(model, idThreat) {
        return __awaiter(this, void 0, void 0, function* () {
            return model.destroy();
        });
    }
    GetByHighImpact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const threat = models_1.default.Threat.findAll({
                attributes: [
                    [sequelize_2.Sequelize.fn('DISTINCT', sequelize_2.Sequelize.col('agent')), 'agent'],
                    "impact"
                ],
                where: { impact: 'High' },
            });
            return threat;
        });
    }
    GetTotal(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Threat.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'total_Threat'],
                ]
            });
        });
    }
    GetAgentByHighRating(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Threat.findAll({
                limit: 3,
                attributes: [
                    [sequelize_1.default.fn('DISTINCT', sequelize_1.default.col('agent')), 'agent']
                ],
                where: { rating: 'High' }
            });
        });
    }
    GetAgentByHighImpact(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Threat.findAll({
                limit: 3,
                attributes: [
                    [sequelize_1.default.fn('DISTINCT', sequelize_1.default.col('agent')), 'agent']
                ],
                where: { impact: 'High' }
            });
        });
    }
    GetAgentByHighLikelihood(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Threat.findAll({
                limit: 3,
                attributes: [
                    [sequelize_1.default.fn('DISTINCT', sequelize_1.default.col('agent')), 'agent']
                ],
                where: { likelihood: 'High' }
            });
        });
    }
    GetHigh(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Threat.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'high_Threat'],
                ],
                where: { rating: 'High' }
            });
        });
    }
    GetMedium(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Threat.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'mediun_Threat'],
                ],
                where: { rating: 'Medium' }
            });
        });
    }
    GetLow(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Threat.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'low_Threat'],
                ],
                where: { rating: 'Low' }
            });
        });
    }
}
exports.ThreatRepository = ThreatRepository;
