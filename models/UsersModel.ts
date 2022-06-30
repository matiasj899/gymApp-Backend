import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
    userName:String,
   })
  

   
const User=mongoose.model('user',userSchema)



export default User