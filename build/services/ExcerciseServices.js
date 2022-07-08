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
exports.createExcercise = exports.getExcerciseById = exports.getExcercises = void 0;
const ExcerciseModel_1 = __importDefault(require("../models/ExcerciseModel"));
const getExcercises = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield ExcerciseModel_1.default.find();
    return data;
});
exports.getExcercises = getExcercises;
const getExcerciseById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield ExcerciseModel_1.default.findById(id);
    return data;
});
exports.getExcerciseById = getExcerciseById;
const createExcercise = (newExcercise) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield ExcerciseModel_1.default.create(newExcercise);
    return data;
});
exports.createExcercise = createExcercise;
