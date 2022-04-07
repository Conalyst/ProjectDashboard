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
module.exports = {
    up: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkInsert("users", [
            {
                id: 1,
                username: 'abd@g.c',
                createdAt: new Date(),
                updatedAt: new Date(),
                password: "123",
                user_type: "internal"
            },
        ]);
        yield queryInterface.bulkInsert("users", [
            {
                id: 2,
                username: 'clientAdmin@g.c',
                createdAt: new Date(),
                updatedAt: new Date(),
                password: "456",
                user_type: "external"
            },
        ]);
    }),
    down: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        return queryInterface.bulkDelete("users", null, {});
    }),
};
