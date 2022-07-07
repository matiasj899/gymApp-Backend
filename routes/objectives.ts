import  express  from "express";
import { createObjective, getObjective } from "../services/ObjectiveServices";




const objectivesRouter=express.Router();

objectivesRouter.get('/',(_req,res)=>{
getObjective().then((data)=>{
    res.status(200)

    res.send(data)
}).catch((err)=>{
    console.error(err)
    res.status(400)
    res.send({ error: err._message })
})
})

objectivesRouter.post('/',(req,res)=>{
    
    const newObjective:Object=req.body
    const newObjectiveBodyHasData:Boolean=Object.keys(newObjective).length>0?true:false
    if(newObjectiveBodyHasData){
      createObjective(newObjective).then((data) => {
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

export default objectivesRouter