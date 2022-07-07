import mongoose from "mongoose"

const RoutineSchema= new mongoose.Schema({
   objective: { type:mongoose.Schema.Types.ObjectId,
      ref:'Objective',
   
      required:true,
},
   trainingLevel:{ type:mongoose.Schema.Types.ObjectId,
      ref:'TrainingLevel',
   
      required:true,
},
   trainingDays:[
      {
         day:[
           { type:mongoose.Schema.Types.ObjectId,
            ref:'Days',
         
            required:true,
   },{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Excercise',
   
      required:true,
      
   }
      ]
        
      },
      
   ]
     
   
     
   

   })
  

   
const Routine=mongoose.model('Routine',RoutineSchema)



export default Routine