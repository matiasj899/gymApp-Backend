"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    userName: { type: String,
        required: true },
    lastName: { type: String,
        //required:true
    },
    roleId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Role',
        //enum:['Afiliate','Trainer'],
        required: true,
    },
    profilePic: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Undefined"],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    routineId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Routine',
        //enum:['Afiliate','Trainer'],
        //required:true,
    },
    password: {
        type: String,
        required: true,
        select: false
    }
});
const User = mongoose_1.default.model('user', userSchema);
exports.default = User;
