"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RolesServices_1 = require("../services/RolesServices");
const rolesRouter = express_1.default.Router();
rolesRouter.get('/', (_req, res) => {
    (0, RolesServices_1.getRoles)().then((data) => {
        res.status(200);
        res.send(data);
    }).catch((err) => {
        console.error(err);
        res.status(400);
        res.send({ error: err._message });
    });
});
rolesRouter.post('/', (req, res) => {
    const newRole = req.body;
    const newRoleBodyHasData = Object.keys(newRole).length > 0 ? true : false;
    if (newRoleBodyHasData) {
        (0, RolesServices_1.createRole)(newRole).then((data) => {
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
exports.default = rolesRouter;
