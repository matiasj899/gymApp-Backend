import mongoose from "mongoose";

const RoleSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        enum:['Afiliate','Trainer'],
        unique:true
    }
})

const Role=mongoose.model('Role',RoleSchema)
export default Role