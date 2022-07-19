import mongoose from "mongoose";

const DaysSchema= new mongoose.Schema({
    dayOne: [
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
    dayTwo: [
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
    dayThree: [
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
    dayFour: [
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
    dayFive: [
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
    daySix: [
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

       
    
})

const Day=mongoose.model('Day',DaysSchema)
export default Day