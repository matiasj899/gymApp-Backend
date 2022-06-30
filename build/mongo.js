"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const mongoose = require("mongoose");
const mongoose_1 = __importDefault(require("mongoose"));
const connectionString = "mongodb+srv://matiasj899:matias123@cluster0.obbymxr.mongodb.net/gymAppDB";
const connectDB = () => {
    mongoose_1.default
        .connect(connectionString)
        .then(() => {
        console.log("database connected");
    })
        .catch((err) => console.log(err));
};
exports.default = connectDB;
