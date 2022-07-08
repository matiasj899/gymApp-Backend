"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MuscleGroupSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        enum: ["chest",
            "back",
            "arms",
            "abdominals",
            "legs",
            "shoulders"],
        unique: true
    }
});
const Muscle = mongoose_1.default.model('Muscle', MuscleGroupSchema);
exports.default = Muscle;
