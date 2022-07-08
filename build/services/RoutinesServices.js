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
exports.createRoutine = exports.getRoutineById = exports.getRoutines = void 0;
const RoutineModel_1 = __importDefault(require("../models/RoutineModel"));
const getRoutines = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield RoutineModel_1.default.find();
    return data;
});
exports.getRoutines = getRoutines;
const getRoutineById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield RoutineModel_1.default.findById(id);
    return data;
});
exports.getRoutineById = getRoutineById;
const createRoutine = (newRoutine) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield RoutineModel_1.default.create(newRoutine);
    return data;
});
exports.createRoutine = createRoutine;
