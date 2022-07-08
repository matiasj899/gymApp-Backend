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
exports.logUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const UsersModel_1 = __importDefault(require("../models/UsersModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (userExists) => {
    const { email, _id, role, userName, lastName } = userExists;
    const token = jsonwebtoken_1.default.sign({ email, _id, role, userName, lastName }, "secretWord");
    return token;
};
const checkPasswordValidity = (userData, userExists) => __awaiter(void 0, void 0, void 0, function* () {
    const correctPassword = yield bcrypt_1.default.compare(userData.password, userExists.password);
    if (correctPassword) {
        const token = generateToken(userExists);
        return { msg: "Logged succesfully", token };
    }
    else {
        throw new Error("email or password are incorrect");
    }
});
const logUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const userExists = yield UsersModel_1.default.findOne({ email: userData.email }).select('+password');
    if (userExists) {
        const result = yield checkPasswordValidity(userData, userExists);
        return result;
    }
    else {
        throw new Error("email or password are incorrect");
    }
});
exports.logUser = logUser;
