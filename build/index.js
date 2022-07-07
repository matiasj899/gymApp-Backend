"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongo_1 = __importDefault(require("./mongo"));
const users_1 = __importDefault(require("./routes/users"));
(0, mongo_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = 3000;
app.use('/api/users', users_1.default);
app.listen(port, () => {
    console.log(`Escuchando el puerto:${port}`);
});
