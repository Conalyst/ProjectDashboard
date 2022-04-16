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
const models_1 = __importDefault(require("../db/models"));
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
    GetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return models_1.default.Threat.findByPk(id);
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
}
exports.ThreatRepository = ThreatRepository;
