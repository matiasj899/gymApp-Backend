import mongoose from "mongoose";




const TrainingLevelSchema=new mongoose.Schema({
    starter:[
   {
    lang:{
        type:String,
        required:true,
    },
    value:{
        type:String,
        required:true
    }
   }
    ],
    intermediate:[  {
        lang:{
            type:String,
            required:true,
        },
        value:{
            type:String,
            required:true
        }
       }],
    advanced:[
        {
            lang:{
                type:String,
                required:true,
            },
            value:{
                type:String,
                required:true
            }
           }
    ]
        //type:String,
        //required:true,
        //enum:['Starter',"Intermediate","Advanced"],
        //unique:true,
    
})

const TrainingLevel=mongoose.model('TrainingLevel',TrainingLevelSchema)
export default TrainingLevel