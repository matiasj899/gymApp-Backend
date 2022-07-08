"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const mongo_1 = __importDefault(require("./mongo"));
const users_1 = __importDefault(require("./routes/users"));
const roles_1 = __importDefault(require("./routes/roles"));
const muscleGroups_1 = __importDefault(require("./routes/muscleGroups"));
const days_1 = __importDefault(require("./routes/days"));
const Excercise_1 = __importDefault(require("./routes/Excercise"));
const routines_1 = __importDefault(require("./routes/routines"));
const trainingLevel_1 = __importDefault(require("./routes/trainingLevel"));
const objectives_1 = __importDefault(require("./routes/objectives"));
const login_1 = __importDefault(require("./routes/login"));
dotenv.config();
(0, mongo_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = 3000;
app.use('/api/users', users_1.default);
app.use('/api/roles', roles_1.default);
app.use('/api/musclesgroups', muscleGroups_1.default);
app.use('/api/days', days_1.default);
app.use('/api/excercises', Excercise_1.default);
app.use('/api/routines', routines_1.default);
app.use('/api/trainingLevels', trainingLevel_1.default);
app.use('/api/objectives', objectives_1.default);
app.use('/api/login', login_1.default);
app.listen(port, () => {
    console.log(`Escuchando el puerto:${port}`);
});
