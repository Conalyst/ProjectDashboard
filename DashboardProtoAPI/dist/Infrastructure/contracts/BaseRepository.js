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
exports.BaseRepository = void 0;
//The contract for defining repositories. Any new repository will have all the default implementations of the 
//above methods: Get, GetById, Update, Create and Delete
class BaseRepository {
    constructor(model) {
        this._model = model;
    }
    Update(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return model.save();
        });
    }
    Create(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return model.save();
        });
    }
    Delete(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return model.destroy();
        });
    }
}
exports.BaseRepository = BaseRepository;
