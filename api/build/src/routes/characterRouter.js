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
const express_1 = require("express");
const character_1 = require("../controllers/character");
const characterRouter = (0, express_1.Router)();
characterRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.query;
    try {
        const response = yield (0, character_1.getAllCharacters)(name);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
characterRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const response = yield (0, character_1.getCharacter)(id);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
characterRouter.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, status, species, gender, origin, image } = req.body;
    try {
        const response = yield (0, character_1.createCharacter)({ name, status, species, gender, origin, image });
        res.status(200).json({ message: response });
    }
    catch (error) {
        res.status(400).json({ erorr: error.message });
    }
}));
characterRouter.put('/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, status, species, gender, origin, image, isFavorite } = req.body;
    try {
        const response = yield (0, character_1.updateCharacter)({ id, name, status, species, gender, origin, image, isFavorite });
        res.status(200).json({ message: response });
    }
    catch (error) {
        res.status(400).json({ erorr: error.message });
    }
}));
characterRouter.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const response = yield (0, character_1.deleteCharacter)(id);
        res.status(200).json({ message: response });
    }
    catch (error) {
        res.status(400).json({ erorr: error.message });
    }
}));
exports.default = characterRouter;
