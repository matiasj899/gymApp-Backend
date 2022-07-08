"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DaysSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        enum: ['dayOne', 'dayTwo', 'dayThree', 'dayFour', 'dayFive', 'daySix'],
        unique: true
    },
    excercises: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Excercise',
            required: true,
        }]
});
const Day = mongoose_1.default.model('Day', DaysSchema);
exports.default = Day;
