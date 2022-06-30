"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
// const cors = require("cors");
// const connectDB=require('./mongo')
// const { User } = require("./models/UsersModel");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongo_1 = __importDefault(require("./mongo"));
const UsersModel_1 = __importDefault(require("./models/UsersModel"));
(0, mongo_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = 3000;
app.get("/api/users", (_req, res) => {
    UsersModel_1.default.find().then((userData) => res.send(userData));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
