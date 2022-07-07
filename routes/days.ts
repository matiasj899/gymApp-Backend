import  express  from "express";
import { getDays, createDay } from '../services/DaysServices';


const daysRouter=express.Router();

daysRouter.get('/',(_req,res)=>{
getDays().then((data)=>{
    res.status(200)

    res.send(data)
}).catch((err)=>{
    console.error(err)
    res.status(400)
    res.send({ error: err._message })
})
})

daysRouter.post('/',(req,res)=>{
    
    const newDay:Object=req.body
    const newDayBodyHasData:Boolean=Object.keys(newDay).length>0?true:false
    if(newDayBodyHasData){
      createDay(newDay).then((data) => {
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

export default daysRouter