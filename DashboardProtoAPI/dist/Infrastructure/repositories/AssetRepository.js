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
exports.AssetRepository = void 0;
const models_1 = __importDefault(require("../db/models"));
const sequelize_1 = __importDefault(require("sequelize"));
const Asset = require("../db/models");
class AssetRepository {
    constructor() {
    }
    GetAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            let assets = yield models_1.default.Asset.findAll({
                include: [
                    { model: models_1.default.AssetCategory, attributes: ['id', 'name'] },
                    {
                        model: models_1.default.Vulnerability,
                        include: [{ model: models_1.default.Threat, attributes: ['id', 'category', 'agent', 'title', 'description'] }],
                        attributes: ['id', 'category', 'title', 'description']
                    }
                ]
            });
            return assets;
        });
    }
    Get() {
        return __awaiter(this, void 0, void 0, function* () {
            let assets = yield models_1.default.Asset.findAll({
                include: [
                    { model: models_1.default.AssetCategory, attributes: ['id', 'name'] },
                    {
                        model: models_1.default.Vulnerability,
                        include: [{ model: models_1.default.Threat, attributes: ['id', 'category', 'agent', 'title', 'description'] }],
                        attributes: ['id', 'category', 'title', 'description']
                    }
                ],
                //  order: [['rating', 'ASC']],
                //  attributes: ['id', 'rating']
            });
            return assets;
        });
    }
    GetAssetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const asset = yield models_1.default.Asset.findOne({
                where: { id: `${id}` },
                include: [
                    { model: models_1.default.AssetCategory, attributes: ['id', 'name'] },
                    {
                        model: models_1.default.Vulnerability,
                        include: [{ model: models_1.default.Threat, attributes: ['id', 'category', 'agent', 'title', 'description'] }],
                        attributes: ['id', 'category', 'title', 'description']
                    }
                ]
            });
            return asset;
        });
    }
    GetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findByPk(id);
        });
    }
    GetByTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const Asset = yield models_1.default.Asset.findOne({
                where: { title: `${title}` }
            });
            return Asset;
        });
    }
    Create(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.create(model['dataValues']);
        });
    }
    Update(model, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.update(model['dataValues'], { where: { id: `${id}` } });
        });
    }
    delete(model, idAsset) {
        return __awaiter(this, void 0, void 0, function* () {
            return model.destroy();
        });
    }
    GetTotal(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'total_Asset'],
                ]
            });
        });
    }
    getStatsForBar() {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findAll({
                attributes: [
                    'categoryId',
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('rating')), 'count'],
                    'rating'
                ],
                group: ["categoryId", 'rating'],
                raw: true,
            });
        });
    }
    GetHigh(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'high_Asset'],
                ],
                where: { rating: 'H' }
            });
        });
    }
    GetMedium(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'mediun_Asset'],
                ],
                where: { rating: 'M' }
            });
        });
    }
    GetLow(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'low_Asset'],
                ],
                where: { rating: 'L' }
            });
        });
    }
    GetHighConfidentiality(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'high_Asset'],
                ],
                where: { confidentiality: 'H' }
            });
        });
    }
    GetMediumConfidentiality(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'mediun_Asset'],
                ],
                where: { confidentiality: 'M' }
            });
        });
    }
    GetLowConfidentiality(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'low_Asset'],
                ],
                where: { confidentiality: 'L' }
            });
        });
    }
    GetHighIntegrity(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'high_Asset'],
                ],
                where: { integrity: 'H' }
            });
        });
    }
    GetMediumIntegrity(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'mediun_Asset'],
                ],
                where: { integrity: 'M' }
            });
        });
    }
    GetLowIntegrity(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'low_Asset'],
                ],
                where: { integrity: 'L' }
            });
        });
    }
    //Availability
    GetHighAvailability(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'high_Asset'],
                ],
                where: { availability: 'H' }
            });
        });
    }
    GetMediumAvailability(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'mediun_Asset'],
                ],
                where: { availability: 'M' }
            });
        });
    }
    GetLowAvailability(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Asset.findAll({
                attributes: [
                    [sequelize_1.default.fn('COUNT', sequelize_1.default.col('id')), 'low_Asset'],
                ],
                where: { availability: 'L' }
            });
        });
    }
    getAssetCategoryByName(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.AssetCategory.findByPk(id);
        });
    }
}
exports.AssetRepository = AssetRepository;
