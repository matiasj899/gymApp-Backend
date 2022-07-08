"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ObjectiveSchema = new mongoose_1.default.Schema({
    loseWeight: [
        {
            lang: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                required: true
            }
        }
    ],
    manteinWeight: [{
            lang: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                required: true
            }
        }],
    gainMuscle: [
        {
            lang: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                required: true
            }
        }
    ]
});
const Objective = mongoose_1.default.model('Objetive', ObjectiveSchema);
exports.default = Objective;
