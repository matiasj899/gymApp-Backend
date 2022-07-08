"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ExcerciseServices_1 = require("../services/ExcerciseServices");
const ExcercisesRouter = express_1.default.Router();
ExcercisesRouter.post('/', (req, res) => {
    const newExcercise = req.body;
    const newExcerciseBodyHasData = Object.keys(newExcercise).length > 0 ? true : false;
    if (newExcerciseBodyHasData) {
        (0, ExcerciseServices_1.createExcercise)(newExcercise).then((data) => {
            res.status(200);
            res.send(data);
        }).catch((err) => {
            console.error(err);
            res.status(400);
            res.send({ error: err._message });
        });
    }
    else {
        res.status(400);
        res.send({ error: 'Invalid data' });
    }
});
ExcercisesRouter.get('/', (_req, res) => {
    (0, ExcerciseServices_1.getExcercises)().then((data) => {
        res.status(200);
        res.send(data);
    });
});
ExcercisesRouter.get('/:id', (req, res) => {
    const excerciseId = req.params.id;
    (0, ExcerciseServices_1.getExcerciseById)(excerciseId).then((data) => {
        res.status(200);
        res.send(data);
    }).catch((err) => {
        console.error(err);
        res.status(400);
        res.send({ error: 'No existe un usuario con este id' });
    });
});
exports.default = ExcercisesRouter;
