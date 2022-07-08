"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TrainingLevelSchema = new mongoose_1.default.Schema({
    starter: [
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
    intermediate: [{
            lang: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                required: true
            }
        }],
    advanced: [
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
    //type:String,
    //required:true,
    //enum:['Starter',"Intermediate","Advanced"],
    //unique:true,
});
const TrainingLevel = mongoose_1.default.model('TrainingLevel', TrainingLevelSchema);
exports.default = TrainingLevel;
