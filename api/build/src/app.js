"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const index_1 = __importDefault(require("./routes/index"));
exports.server = (0, express_1.default)();
exports.server.use(express_1.default.json()); //middleware que transforma el req.body a json
exports.server.use(express_1.default.urlencoded({ extended: false }));
exports.server.use(cors());
exports.server.use(morgan('dev'));
exports.server.use(cookieParser());
exports.server.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
exports.server.use('/', index_1.default);
// Error catching endware.
exports.server.use((err, _req, res, next) => {
    // const status = err.|| 500;
    const message = err.message || err;
    console.error(err);
    res.status(500).send(message);
    next();
});
