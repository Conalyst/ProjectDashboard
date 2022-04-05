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
exports.TestApi = void 0;
const TestDto_1 = require("../domain/dtos/TestDto");
const testMapper_1 = require("../application/mappers/testMapper");
const TestRepository_1 = require("../Infrastructure/repositories/TestRepository");
class TestApi {
    constructor() {
        this._testRepository = new TestRepository_1.TestRepository();
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let testsList = yield this._testRepository.Get();
            return res.status(200).json(testsList);
        });
    }
    ;
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("in create ", req.body);
            const testDto = this.getDtoFromRequest(req);
            let createTest = yield this._testRepository.Create((0, testMapper_1.toEntity)(testDto));
            if (createTest) {
                console.log('comment created', createTest);
                return res.status(201).json(createTest);
            }
            else {
                return res.status(400).send("The comment could not be created. Please check the provided data.");
            }
        });
    }
    getDtoFromRequest(req) {
        return new TestDto_1.TestDto(req.body.id, req.body.title, new Date());
    }
}
exports.TestApi = TestApi;
