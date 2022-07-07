import mongoose from "mongoose";

const ExcerciseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        //required: true
    },
    muscleGroupId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Muscle',
        //enum:['Afiliate','Trainer'],
        required:true,
    },
    series:{
        type:Number,
        required:true
    },
    repetitions:{
        type:Number,
        required:true
    }

})

const Excercise=  mongoose.model('Excercise',ExcerciseSchema)
export default Excercise