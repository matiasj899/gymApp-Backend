"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DaysServices_1 = require("../services/DaysServices");
const daysRouter = express_1.default.Router();
daysRouter.get('/', (_req, res) => {
    (0, DaysServices_1.getDays)().then((data) => {
        res.status(200);
        res.send(data);
    }).catch((err) => {
        console.error(err);
        res.status(400);
        res.send({ error: err._message });
    });
});
daysRouter.post('/', (req, res) => {
    const newDay = req.body;
    const newDayBodyHasData = Object.keys(newDay).length > 0 ? true : false;
    if (newDayBodyHasData) {
        (0, DaysServices_1.createDay)(newDay).then((data) => {
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
exports.default = daysRouter;
