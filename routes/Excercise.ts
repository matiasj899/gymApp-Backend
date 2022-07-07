import express from "express";
import { createExcercise, getExcerciseById, getExcercises } from "../services/ExcerciseServices";


const ExcercisesRouter = express.Router();

ExcercisesRouter.post('/', (req, res) => {
  
  const newExcercise:Object=req.body
  const newExcerciseBodyHasData:Boolean=Object.keys(newExcercise).length>0?true:false
  if(newExcerciseBodyHasData){
    createExcercise(newExcercise).then((data) => {
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

ExcercisesRouter.get('/', (_req, res) => {
  getExcercises().then((data) => {
    res.status(200)

    res.send(data)
  })

});


ExcercisesRouter.get('/:id', (req, res) => {

  const excerciseId = req.params.id
  getExcerciseById(excerciseId).then((data) => {
    res.status(200)
    res.send(data)
  }).catch((err) => {
    console.error(err)
    res.status(400)
    res.send({ error: 'No existe un usuario con este id' })
  })

});

export default ExcercisesRouter