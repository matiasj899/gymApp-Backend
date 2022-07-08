"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TrainingLevelServices_1 = require("../services/TrainingLevelServices");
const trainingLevelRouter = express_1.default.Router();
trainingLevelRouter.get('/', (_req, res) => {
    (0, TrainingLevelServices_1.getTrainingLevel)().then((data) => {
        res.status(200);
        res.send(data);
    }).catch((err) => {
        console.error(err);
        res.status(400);
        res.send({ error: err._message });
    });
});
trainingLevelRouter.post('/', (req, res) => {
    const newTrainingLevel = req.body;
    const newTrainingLevelBodyHasData = Object.keys(newTrainingLevel).length > 0 ? true : false;
    if (newTrainingLevelBodyHasData) {
        (0, TrainingLevelServices_1.createTrainingLevel)(newTrainingLevel).then((data) => {
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
exports.default = trainingLevelRouter;
