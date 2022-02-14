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
exports.TestRepository = void 0;
const BaseRepository_1 = require("../contracts/BaseRepository");
const test_1 = require("../db/models/test");
class TestRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(test_1.TestEntity);
    }
    GetByPhone(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return test_1.TestEntity.findOne({
                where: { phone: `${phoneNumber}` }
            });
        });
    }
}
exports.TestRepository = TestRepository;
