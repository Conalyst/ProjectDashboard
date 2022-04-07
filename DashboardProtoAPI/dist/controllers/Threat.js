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
class ThreatApi {
    constructor() {
        this._ThreatRepository = new ThreatRepository_1.ThreatRepository();
    }
    getAllThreats(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let threatList = yield this._ThreatRepository.Get();
            // console.log("Helllllo")
            return res.status(200).json(threatList);
        });
    }
    ;
    getThreatById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let threatId = req.params.id;
            console.log(threatId);
            let threat = yield this._ThreatRepository.GetById(threatId);
            return res.status(200).json(threat);
        });
    }
    ;
}
exports.ThreatApi = ThreatApi;
