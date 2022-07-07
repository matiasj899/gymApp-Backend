import mongoose from "mongoose"

const RoutineSchema= new mongoose.Schema({
   objetive:{
    type:String,
    required:true,
    enum:["Lose weight","Mantein weigth","Gain muscle"]
   },
   trainingLevel:{
    type:String,
    required:true,
    enum:['Starter',"Intermediate","Advanced"]
   },

   })
  

   
const Routine=mongoose.model('Routine',RoutineSchema)



export default Routine