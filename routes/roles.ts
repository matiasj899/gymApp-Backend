import  express  from "express";
import { getRoles, createRole } from '../services/RolesServices';

const rolesRouter=express.Router();

rolesRouter.get('/',(_req,res)=>{
getRoles().then((data)=>{
    res.status(200)

    res.send(data)
}).catch((err)=>{
    console.error(err)
    res.status(400)
    res.send({ error: err._message })
})
})

rolesRouter.post('/',(req,res)=>{
    
    const newRole:Object=req.body
    const newRoleBodyHasData:Boolean=Object.keys(newRole).length>0?true:false
    if(newRoleBodyHasData){
      createRole(newRole).then((data) => {
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

export default rolesRouter