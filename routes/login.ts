
import express from 'express';
import { logUser } from '../services/LoginServices';

const loginRouter=express.Router();

loginRouter.post('/',(req,res)=>{

    const userCredentials:Object=req.body
    const userCredentialsBodyHasData:Boolean=Object.keys(userCredentials).length>0?true:false
    if(userCredentialsBodyHasData){
      logUser(userCredentials).then((data) => {
        res.status(200)
    
        res.send(data)
      }).catch((err) => {
  
        console.error(err)
        res.status(401)
        res.send({ error: 'Email or password are incorrect' })
      })
    }else{
      res.status(401)
      res.send({ error: 'Email or password are incorrect' })
    }
    })

export default loginRouter