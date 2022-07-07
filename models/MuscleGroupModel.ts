import mongoose from "mongoose";   

const MuscleGroupSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        enum: ["chest",
            "back",
            "arms",
            "abdominals",
            "legs",
            "shoulders"],
            unique:true
    }
})

const Muscle=mongoose.model('Muscle',MuscleGroupSchema)
export default Muscle