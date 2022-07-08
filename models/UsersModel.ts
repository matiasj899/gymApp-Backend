import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
    userName:{type:String,
    required:true},
    lastName:{type:String,
        //required:true
    },
    roleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Role',
        //enum:['Afiliate','Trainer'],
        required:true,
    },
    profilePic:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female","Undefined"],
        required:true
    },
    email:{
        type:String,
     required:true,
     unique:true
    },
    phoneNumber:{
        type:Number,
      required:true,
    },
    routineId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Routine',
        //enum:['Afiliate','Trainer'],
        //required:true,
    },
    password:{
        type:String,
        required:true,
        select:false
    }
   })
  

   
const User=mongoose.model('user',userSchema)



export default User