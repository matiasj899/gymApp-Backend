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
exports.createTrainingLevel = exports.getTrainingLevelById = exports.getTrainingLevel = void 0;
const TrainingLevelModel_1 = __importDefault(require("../models/TrainingLevelModel"));
const getTrainingLevel = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield TrainingLevelModel_1.default.find();
    return data;
});
exports.getTrainingLevel = getTrainingLevel;
const getTrainingLevelById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield TrainingLevelModel_1.default.findById(id);
    return data;
});
exports.getTrainingLevelById = getTrainingLevelById;
const createTrainingLevel = (newTrainingLevel) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield TrainingLevelModel_1.default.create(newTrainingLevel);
    return data;
});
exports.createTrainingLevel = createTrainingLevel;
