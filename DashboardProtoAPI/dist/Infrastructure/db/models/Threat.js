'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Threat extends sequelize_1.Model {
        static associate(models) {
            // Asset.belongsTo(models.AssetCategory, {
            //   foreignKey: 'categoryId',
            // })
            Threat.belongsToMany(models.Vulnerability, {
                through: models.VulnerabilityThreat,
                foreignKey: 'threatId'
            });
        }
    }
    Threat.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        agent: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        title: {
            type: DataTypes.TEXT,
            // allowNull:false
        },
        description: {
            type: DataTypes.TEXT,
            // allowNull:false
        },
        impact: {
            type: DataTypes.STRING,
            allowNull: false
        },
        likelihood: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        indexRating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        createdAt: {
            type: new DataTypes.DATE,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Threat',
        tableName: 'threats'
    });
    return Threat;
};
