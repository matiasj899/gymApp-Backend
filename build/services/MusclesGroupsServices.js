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
exports.createMusclesGroups = exports.getMusclesGroupsById = exports.getMusclesGroups = void 0;
const MuscleGroupModel_1 = __importDefault(require("../models/MuscleGroupModel"));
const getMusclesGroups = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield MuscleGroupModel_1.default.find();
    return data;
});
exports.getMusclesGroups = getMusclesGroups;
const getMusclesGroupsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield MuscleGroupModel_1.default.findById(id);
    return data;
});
exports.getMusclesGroupsById = getMusclesGroupsById;
const createMusclesGroups = (newMuscleGroup) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield MuscleGroupModel_1.default.create(newMuscleGroup);
    return data;
});
exports.createMusclesGroups = createMusclesGroups;
