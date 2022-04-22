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
exports.RiskRepository = void 0;
const models_1 = __importDefault(require("../db/models"));
const sequelize_1 = __importDefault(require("sequelize"));
const Risk = require("../db/models");
class RiskRepository {
    constructor() {
    }
    Get() {
        return __awaiter(this, void 0, void 0, function* () {
            let risks = yield models_1.default.Risk.findAll();
            return risks;
        });
    }
    GetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Risk.findByPk(id);
        });
    }
    GetByTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const Risk = yield models_1.default.Risk.findOne({
                where: { title: `${title}` }
            });
            return Risk;
        });
    }
    Create(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Risk.create(model['dataValues']);
        });
    }
    Update(model, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Risk.update(model['dataValues'], { where: { id: `${id}` } });
        });
    }
    GetTotal(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Risk.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'total_Risk'],
                ]
            });
        });
    }
    GetHigh(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Risk.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'high_Risk'],
                ],
                where: { rating: 'High' }
            });
        });
    }
    GetMedium(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Risk.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'mediun_Risk'],
                ],
                where: { rating: 'Medium' }
            });
        });
    }
    GetLow(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Risk.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'low_Risk'],
                ],
                where: { rating: 'Low' }
            });
        });
    }
}
exports.RiskRepository = RiskRepository;
