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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskApi = void 0;
const RiskRepository_1 = require("../Infrastructure/repositories/RiskRepository");
const RiskDto_1 = require("../domain/dtos/RiskDto");
const RiskMapper_1 = require("../application/mappers/RiskMapper");
class RiskApi {
    constructor() {
        this._riskRepository = new RiskRepository_1.RiskRepository();
    }
    getAllRisks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let riskList = yield this._riskRepository.Get();
            // console.log("Helllllo")
            return res.status(200).json(riskList);
        });
    }
    ;
    getRiskById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let riskId = req.params.id;
            let risk = yield this._riskRepository.GetById(riskId);
            return res.status(200).json(risk);
        });
    }
    ;
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title } = req.body;
            const alreadyExistsRisk = yield this._riskRepository.GetByTitle(title)
                .catch((err) => {
                console.log("Error: ", err);
            });
            if (alreadyExistsRisk) {
                return res.status(409).json({ message: "this Risk already exist!" });
            }
            else {
                const riskDto = this.getDtoFromRequest(req);
                let createdRisk = yield this._riskRepository.Create((0, RiskMapper_1.toEntity)(riskDto));
                if (createdRisk) {
                    return res.status(201).json(createdRisk);
                }
                else {
                    return res.status(400).send("The Risk could not be created. Please check the provided data.");
                }
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const exists = yield this._riskRepository.GetById(id)
                .catch((err) => {
                console.log("Error: ", err);
            });
            if (exists) {
                const riskDto = this.getDtoFromRequest(req);
                let updatedRisk = yield this._riskRepository.Update((0, RiskMapper_1.toEntity)(riskDto), id);
                if (updatedRisk) {
                    updatedRisk = yield this._riskRepository.GetById(id);
                    return res.status(201).json(updatedRisk);
                }
                else {
                    return res.status(400).send("The Risk could not be updated. Please check the provided data.");
                }
            }
            else {
                return res.status(400).send("This Risk doesn't exist. Please check the Risk.");
            }
        });
    }
    //#region private methods
    getDtoFromRequest(req) {
        return new RiskDto_1.RiskDto(req.body.id, req.body.category, req.body.title, req.body.description, req.body.impact, req.body.likelihood, req.body.rating, new Date());
    }
}
exports.RiskApi = RiskApi;
