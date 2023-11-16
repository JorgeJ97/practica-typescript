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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCharacter = exports.updateCharacter = exports.createCharacter = exports.getCharacter = exports.getAllCharacters = exports.saveAll = void 0;
const axios_1 = __importDefault(require("axios"));
const db_1 = __importDefault(require("../db"));
const sequelize_1 = require("sequelize");
const API_URL = 'https://rickandmortyapi.com/api/character';
const saveAll = () => __awaiter(void 0, void 0, void 0, function* () {
    let response = [];
    for (let i = 1; i <= 10; i++) {
        let responseUrl = yield (0, axios_1.default)(`${API_URL}?page=${i}`);
        response.push(responseUrl.data.results);
    }
    response = response.flat();
    const charactersDB = response.map(character => {
        return {
            name: character.name,
            status: character.status,
            species: character.species,
            gender: character.gender,
            origin: character.origin.name,
            image: character.image
        };
    });
    const characters = yield db_1.default.Character.bulkCreate(charactersDB);
    return characters;
});
exports.saveAll = saveAll;
const getAllCharacters = (name) => __awaiter(void 0, void 0, void 0, function* () {
    let allCharacters = yield db_1.default.Character.findAll();
    if (!name) {
        return !allCharacters.length ? yield (0, exports.saveAll)() : allCharacters;
    }
    if (!allCharacters.length) {
        yield (0, exports.saveAll)();
    }
    const filterCharacters = yield db_1.default.Character.findAll({
        where: { name: { [sequelize_1.Op.iLike]: `%${name}%` } },
    });
    return filterCharacters;
});
exports.getAllCharacters = getAllCharacters;
const getCharacter = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let allCharacters = yield db_1.default.Character.findAll();
    if (!allCharacters.length)
        yield (0, exports.saveAll)();
    const character = yield db_1.default.Character.findByPk(id);
    if (!character)
        throw Error('Character not found');
    return character;
});
exports.getCharacter = getCharacter;
const createCharacter = (character) => __awaiter(void 0, void 0, void 0, function* () {
    const existingCharacter = yield db_1.default.Character.findOne({
        where: {
            name: character.name,
        }
    });
    if (existingCharacter)
        throw Error('Character already exist');
    yield db_1.default.Character.create(character);
    return 'Character created';
});
exports.createCharacter = createCharacter;
const updateCharacter = (character) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, status, species, gender, origin, image, isFavorite } = character;
    const existingCharacter = yield db_1.default.Character.findByPk(id);
    if (!existingCharacter)
        throw Error('Character not found');
    yield db_1.default.Character.update({ name, status, species, gender, origin, image, isFavorite }, {
        where: {
            id: id
        }
    });
    return 'Updated character';
});
exports.updateCharacter = updateCharacter;
const deleteCharacter = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existingCharacter = yield db_1.default.Character.findByPk(id);
    if (!existingCharacter)
        throw Error('This character does not exis');
    yield existingCharacter.destroy();
    return 'Character deleted successfully';
});
exports.deleteCharacter = deleteCharacter;
