"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RoutinesServices_1 = require("../services/RoutinesServices");
const routinesRouter = express_1.default.Router();
routinesRouter.post('/', (req, res) => {
    const newRoutine = req.body;
    const newRoutineBodyHasData = Object.keys(newRoutine).length > 0 ? true : false;
    if (newRoutineBodyHasData) {
        (0, RoutinesServices_1.createRoutine)(newRoutine).then((data) => {
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
routinesRouter.get('/', (_req, res) => {
    (0, RoutinesServices_1.getRoutines)().then((data) => {
        res.status(200);
        res.send(data);
    });
});
routinesRouter.get('/:id', (req, res) => {
    const routineId = req.params.id;
    (0, RoutinesServices_1.getRoutineById)(routineId).then((data) => {
        res.status(200);
        res.send(data);
    }).catch((err) => {
        console.error(err);
        res.status(400);
        res.send({ error: 'No existe un usuario con este id' });
    });
});
exports.default = routinesRouter;
