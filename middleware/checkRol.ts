
export const checkRol = (req:any,res:any,next:any) => {
  const userRol=req.body.decoded.roleId.name
  if(userRol!=="Trainer"){
    res.status(401)
    res.send({error:'Invalid token or authorization'})
  }else{
    next()
  }

  }
  