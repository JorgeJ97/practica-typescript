"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./src/app");
const db_1 = __importDefault(require("./src/db"));
const PORT = 3001;
db_1.default.conn.sync({ force: false }).then(() => {
    app_1.server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
