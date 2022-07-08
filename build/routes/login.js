"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LoginServices_1 = require("../services/LoginServices");
const loginRouter = express_1.default.Router();
loginRouter.post('/', (req, res) => {
    const userCredentials = req.body;
    const userCredentialsBodyHasData = Object.keys(userCredentials).length > 0 ? true : false;
    if (userCredentialsBodyHasData) {
        (0, LoginServices_1.logUser)(userCredentials).then((data) => {
            res.status(200);
            res.send(data);
        }).catch((err) => {
            console.log('aca');
            console.error(err);
            res.status(400);
            res.send({ error: 'Email or password are incorrect' });
        });
    }
    else {
        res.status(400);
        res.send({ error: 'Email or password are incorrect' });
    }
});
exports.default = loginRouter;
