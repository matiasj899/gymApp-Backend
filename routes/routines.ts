import express from "express";
import { createRoutine, getRoutineById, getRoutines } from '../services/RoutinesServices';

const routinesRouter=express.Router();

routinesRouter.post('/', (req, res) => {
  
    const newRoutine:Object=req.body
    const newRoutineBodyHasData:Boolean=Object.keys(newRoutine).length>0?true:false
    if(newRoutineBodyHasData){
      createRoutine(newRoutine).then((data) => {
        res.status(200)
    
        res.send(data)
      }).catch((err) => {
        console.error(err)
        res.status(400)
        res.send({ error: err._message })
      })
    }else{
      res.status(400)
      res.send({ error: 'Invalid data' })
    }
   
  
  });
  
  routinesRouter.get('/', (_req, res) => {
    getRoutines().then((data) => {
      res.status(200)
  
      res.send(data)
    })
  
  });
  
  routinesRouter.get('/:id', (req, res) => {
  
    const routineId = req.params.id
    getRoutineById(routineId).then((data) => {
      res.status(200)
      res.send(data)
    }).catch((err) => {
      console.error(err)
      res.status(400)
      res.send({ error: 'No existe un usuario con este id' })
    })
  
  });
  
  export default routinesRouter