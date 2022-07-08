"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MusclesGroupsServices_1 = require("../services/MusclesGroupsServices");
const musclesGroupsRouter = express_1.default.Router();
musclesGroupsRouter.get('/', (_req, res) => {
    (0, MusclesGroupsServices_1.getMusclesGroups)().then((data) => {
        res.status(200);
        res.send(data);
    }).catch((err) => {
        console.error(err);
        res.status(400);
        res.send({ error: err._message });
    });
});
musclesGroupsRouter.post('/', (req, res) => {
    const newMuscleGroup = req.body;
    const newMuscleGroupBodyHasData = Object.keys(newMuscleGroup).length > 0 ? true : false;
    if (newMuscleGroupBodyHasData) {
        (0, MusclesGroupsServices_1.createMusclesGroups)(newMuscleGroup).then((data) => {
            res.status(200);
            res.send(data);
        }).catch((err) => {
            console.error(err);
            const errorType = err.code === 11000 ? 'This value exists in database and is unique.' : err._message;
            res.status(400);
            res.send({ error: errorType });
        });
    }
    else {
        res.status(400);
        res.send({ error: 'Invalid data' });
    }
});
exports.default = musclesGroupsRouter;
