// const express = require("express");
// const cors = require("cors");
// const connectDB=require('./mongo')
// const { User } = require("./models/UsersModel");
import express from 'express'
import cors from 'cors'
import connectDB from './mongo';
import User from './models/UsersModel';


connectDB();

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/api/users", (_req, res) => {
  User.find().then((userData) => res.send(userData));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
