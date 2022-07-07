import  express  from "express";
import { getMusclesGroups, createMusclesGroups } from '../services/MusclesGroupsServices';


const musclesGroupsRouter=express.Router();

musclesGroupsRouter.get('/',(_req,res)=>{
getMusclesGroups().then((data)=>{
    res.status(200)

    res.send(data)
}).catch((err)=>{
    console.error(err)
    res.status(400)
    res.send({ error: err._message })
})
})

musclesGroupsRouter.post('/',(req,res)=>{
    
    const newMuscleGroup:Object=req.body
    const newMuscleGroupBodyHasData:Boolean=Object.keys(newMuscleGroup).length>0?true:false
    if(newMuscleGroupBodyHasData){
      createMusclesGroups(newMuscleGroup).then((data) => {
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

export default musclesGroupsRouter