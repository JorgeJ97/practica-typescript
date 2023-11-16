"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
require("dotenv").config();
const sequelize_1 = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
// Paso 1
const Characters_1 = __importDefault(require("./models/Characters"));
exports.sequelize = new sequelize_1.Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/randm`, {
    logging: false,
    native: false,
    dialectOptions: {
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
    },
});
// Paso 2 
(0, Characters_1.default)(exports.sequelize);
// Paso 3. 
//Aqui se traen los modelos.
const { Character } = exports.sequelize.models;
// relaciones entre modelos
exports.default = Object.assign(Object.assign({ Character }, exports.sequelize.models), { conn: exports.sequelize });
