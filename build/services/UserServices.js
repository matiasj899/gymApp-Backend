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
exports.createUser = exports.getUserById = exports.getUsers = void 0;
const UsersModel_1 = __importDefault(require("../models/UsersModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield UsersModel_1.default.find().populate({
        path: "roleId"
    });
    return data;
});
exports.getUsers = getUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield UsersModel_1.default.findById(id).populate({
        path: "roleId"
    });
    return data;
});
exports.getUserById = getUserById;
const hashUserPassword = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const password = user.password;
    const saltRounds = 10;
    const hashPassword = yield bcrypt_1.default.hash(password, saltRounds);
    user.password = hashPassword;
    return user;
});
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userWithHashedPassWord = yield hashUserPassword(user);
    const data = yield UsersModel_1.default.create(userWithHashedPassWord);
    return data;
});
exports.createUser = createUser;
