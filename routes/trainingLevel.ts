import  express  from "express";

import { createTrainingLevel, getTrainingLevel } from '../services/TrainingLevelServices';


const trainingLevelRouter=express.Router();

trainingLevelRouter.get('/',(_req,res)=>{
getTrainingLevel().then((data)=>{
    res.status(200)

    res.send(data)
}).catch((err)=>{
    console.error(err)
    res.status(400)
    res.send({ error: err._message })
})
})

trainingLevelRouter.post('/',(req,res)=>{
    
    const newTrainingLevel:Object=req.body
    const newTrainingLevelBodyHasData:Boolean=Object.keys(newTrainingLevel).length>0?true:false
    if(newTrainingLevelBodyHasData){
      createTrainingLevel(newTrainingLevel).then((data) => {
        res.status(200)
    
        res.send(data)
      }).catch((err) => {
        console.error(err)
        const errorType=err.code===11000?'This value exists in database and is unique.':err._message
        res.status(400)
        res.send({ error: errorType })
      })
    }else{
      res.status(400)
      res.send({ error: 'Invalid data' })
    }
    })

export default trainingLevelRouter