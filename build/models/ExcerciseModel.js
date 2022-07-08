"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ExcerciseSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        //required: true
    },
    muscleGroupId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Muscle',
        //enum:['Afiliate','Trainer'],
        required: true,
    },
    series: {
        type: Number,
        required: true
    },
    repetitions: {
        type: Number,
        required: true
    }
});
const Excercise = mongoose_1.default.model('Excercise', ExcerciseSchema);
exports.default = Excercise;
