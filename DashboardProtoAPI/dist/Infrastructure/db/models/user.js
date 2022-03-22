"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
class UserEntity extends sequelize_1.Model {
    ;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
    }
}
exports.UserEntity = UserEntity;
UserEntity.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: sequelize_1.DataTypes.STRING,
    user_type: sequelize_1.DataTypes.ENUM('internal', 'external'),
    password: sequelize_1.DataTypes.STRING,
    createdAt: sequelize_1.DataTypes.DATE,
}, {
    sequelize: sequelize_2.sequelize,
    modelName: 'User',
});
