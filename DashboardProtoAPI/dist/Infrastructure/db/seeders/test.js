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
const uuid_1 = require("uuid");
'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */
        yield queryInterface.bulkInsert('tests', [{
                id: (0, uuid_1.v4)(),
                title: 'test1',
                createdAt: new Date(),
                updatedAt: new Date()
            }]);
        yield queryInterface.bulkInsert('tests', [{
                id: (0, uuid_1.v4)(),
                title: 'test2',
                done: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }]);
        yield queryInterface.bulkInsert('orders', [{
                userId: 4,
                restaurantId: 4,
                done: false,
                createdAt: new Date(),
                updatedAt: new Date()
            }]);
    }),
    down: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('orders', null, {});
         */
        yield queryInterface.bulkDelete('tests', null, {});
    })
};
