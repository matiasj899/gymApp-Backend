//const mongoose = require("mongoose");
import mongoose from "mongoose";
const connectionString =
  "mongodb+srv://matiasj899:matias123@cluster0.obbymxr.mongodb.net/gymAppDB";

const connectDB=()=>{
    mongoose
    .connect(connectionString)
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => console.log(err));
}
export default connectDB;

