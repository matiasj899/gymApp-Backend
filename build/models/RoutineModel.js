"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const RoutineSchema = new mongoose_1.default.Schema({
    objective: { type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Objective',
        required: true,
    },
    trainingLevel: { type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'TrainingLevel',
        required: true,
    },
    trainingDays: [
        {
            day: [
                { type: mongoose_1.default.Schema.Types.ObjectId,
                    ref: 'Days',
                    required: true,
                }, {
                    type: mongoose_1.default.Schema.Types.ObjectId,
                    ref: 'Excercise',
                    required: true,
                }
            ]
        },
    ]
});
const Routine = mongoose_1.default.model('Routine', RoutineSchema);
exports.default = Routine;
