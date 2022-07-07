import mongoose from "mongoose";

const DaysSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        enum:['dayOne','dayTwo','dayThree','dayFour','dayFive','daySix'],
        unique:true
    },
    excercises:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Excercise',
     
        required:true,
    }]
       
    
})

const Day=mongoose.model('Day',DaysSchema)
export default Day