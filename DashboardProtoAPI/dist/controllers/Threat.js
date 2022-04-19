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
exports.ThreatApi = void 0;
const ThreatRepository_1 = require("../Infrastructure/repositories/ThreatRepository");
const ThreatDto_1 = require("../domain/dtos/ThreatDto");
const ThreatMapper_1 = require("../application/mappers/ThreatMapper");
class ThreatApi {
    constructor() {
        this._threatRepository = new ThreatRepository_1.ThreatRepository();
    }
    getAllThreats(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let threatList = yield this._threatRepository.Get();
            // console.log("Helllllo")
            return res.status(200).json(threatList);
        });
    }
    ;
    getThreatById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let threatId = req.params.id;
            console.log(threatId);
            let threat = yield this._threatRepository.GetById(threatId);
            return res.status(200).json(threat);
        });
    }
    ;
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title } = req.body;
            const alreadyExistsThreat = yield this._threatRepository.GetByTitle(title)
                .catch((err) => {
                console.log("Error: ", err);
            });
            if (alreadyExistsThreat) {
                return res.status(409).json({ message: "this Threat already exist!" });
            }
            else {
                const threatDto = this.getDtoFromRequest(req);
                let createdThreat = yield this._threatRepository.Create((0, ThreatMapper_1.toEntity)(threatDto));
                if (createdThreat) {
                    return res.status(201).json(createdThreat);
                }
                else {
                    return res.status(400).send("The vulnerability could not be created. Please check the provided data.");
                }
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const exists = yield this._threatRepository.GetById(id)
                .catch((err) => {
                console.log("Error: ", err);
            });
            if (exists) {
                const threatDto = this.getDtoFromRequest(req);
                let updatedthreat = yield this._threatRepository.Update((0, ThreatMapper_1.toEntity)(threatDto), id);
                if (updatedthreat) {
                    updatedthreat = yield this._threatRepository.GetById(id);
                    return res.status(201).json(updatedthreat);
                }
                else {
                    return res.status(400).send("The threat could not be updated. Please check the provided data.");
                }
            }
            else {
                return res.status(400).send("This threat doesn't exist. Please check the threat.");
            }
        });
    }
    // Delete Threat 
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let threatId = req.params.id;
            let existingThreat = yield this._threatRepository.GetById(threatId);
            if (existingThreat) {
                let updatedThreat = yield this._threatRepository.delete(existingThreat);
                return res.status(200).send(`The threat with Id ${threatId} deleted  successfully..!`);
            }
            else {
                return res.status(404).send("This threat does not exist.");
            }
        });
    }
    //#region private methods
    getDtoFromRequest(req) {
        return new ThreatDto_1.ThreatDto(req.body.id, req.body.category, req.body.agent, req.body.title, req.body.description, req.body.impact, req.body.likelihood, req.body.rating, new Date());
    }
}
exports.ThreatApi = ThreatApi;