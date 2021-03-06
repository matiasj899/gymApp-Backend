"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserServices_1 = require("../services/UserServices");
const usersRouter = express_1.default.Router();
usersRouter.post('/', (req, res) => {
    const newUser = req.body;
    const newUserBodyHasData = Object.keys(newUser).length > 0 ? true : false;
    if (newUserBodyHasData) {
        (0, UserServices_1.createUser)(newUser).then((data) => {
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
usersRouter.get('/', (_req, res) => {
    (0, UserServices_1.getUsers)().then((data) => {
        res.status(200);
        res.send(data);
    });
});
usersRouter.get('/:id', (req, res) => {
    const userId = req.params.id;
    (0, UserServices_1.getUserById)(userId).then((data) => {
        res.status(200);
        res.send(data);
    }).catch((err) => {
        console.error(err);
        res.status(400);
        res.send({ error: 'No existe un usuario con este id' });
    });
});
exports.default = usersRouter;
