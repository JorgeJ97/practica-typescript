"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const characterRouter_1 = __importDefault(require("./characterRouter"));
// Importar todos los routers;
const router = Router();
// Configurar los routers:
router.use('/characters', characterRouter_1.default);
exports.default = router;
