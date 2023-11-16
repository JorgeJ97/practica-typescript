"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const CharacterModel = (sequelize) => {
    sequelize.define('Character', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: sequelize_1.DataTypes.ENUM({
                values: ['Alive', 'Dead', 'unknown'],
            }),
            allowNull: false
        },
        species: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: sequelize_1.DataTypes.ENUM({
                values: ['Female', 'Male', 'Genderless', 'unknown']
            }),
            allowNull: false
        },
        origin: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        isFavorite: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, { timestamps: false });
};
exports.default = CharacterModel;
