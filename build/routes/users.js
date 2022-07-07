"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsersModel_1 = __importDefault(require("../models/UsersModel"));
const usersRouter = express_1.default.Router();
usersRouter.get('/', (_req, res) => {
    UsersModel_1.default.find().then((userData) => res.send(userData));
});
exports.default = usersRouter;
