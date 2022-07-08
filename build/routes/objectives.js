"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ObjectiveServices_1 = require("../services/ObjectiveServices");
const objectivesRouter = express_1.default.Router();
objectivesRouter.get('/', (_req, res) => {
    (0, ObjectiveServices_1.getObjective)().then((data) => {
        res.status(200);
        res.send(data);
    }).catch((err) => {
        console.error(err);
        res.status(400);
        res.send({ error: err._message });
    });
});
objectivesRouter.post('/', (req, res) => {
    const newObjective = req.body;
    const newObjectiveBodyHasData = Object.keys(newObjective).length > 0 ? true : false;
    if (newObjectiveBodyHasData) {
        (0, ObjectiveServices_1.createObjective)(newObjective).then((data) => {
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
exports.default = objectivesRouter;
