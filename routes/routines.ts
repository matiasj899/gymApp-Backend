import express from "express";

const routinesRoutes=express.Router();

routinesRoutes.post('/', (req, res) => {
  
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
  
  routinesRoutes.get('/', (_req, res) => {
    getUsers().then((data) => {
      res.status(200)
  
      res.send(data)
    })
  
  });
  
  routinesRoutes.get('/:id', (req, res) => {
  
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
  
  export default routinesRoutes