import express from "express";
import { getUsers, getUserById,createUser } from "../services/UserServices";

const usersRouter = express.Router();

usersRouter.post('/', (req, res) => {
  
  const newUser:Object=req.body
  const newUserBodyHasData:Boolean=Object.keys(newUser).length>0?true:false
  if(newUserBodyHasData){
    createUser(newUser).then((data) => {
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

usersRouter.get('/', (_req, res) => {
  getUsers().then((data) => {
    res.status(200)

    res.send(data)
  })

});


usersRouter.get('/:id', (req, res) => {

  const userId = req.params.id
  getUserById(userId).then((data) => {
    res.status(200)
    res.send(data)
  }).catch((err) => {
    console.error(err)
    res.status(400)
    res.send({ error: 'No existe un usuario con este id' })
  })

});

export default usersRouter