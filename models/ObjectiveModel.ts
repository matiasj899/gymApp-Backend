import mongoose from "mongoose";

const ObjectiveSchema = new mongoose.Schema({
    loseWeight: [
        {
            lang: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                required: true
            }
        }
    ],
    manteinWeight: [{
        lang: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true
        }
    }],
    gainMuscle: [
        {
            lang: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                required: true
            }
        }
    ]
})

const Objective = mongoose.model('Objetive', ObjectiveSchema)
export default Objective