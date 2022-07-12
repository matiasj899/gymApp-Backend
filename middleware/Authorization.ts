//import express from "express";
import jwt from "jsonwebtoken"
import 'dotenv/config'
const secret:any=process.env.SECRET



export const authorization = (req:any,res:any,next:any) => {
  const token=req.headers.authorization?.split(' ')[1]
if(token){
  try {
    const decoded:any=jwt.verify(token,secret)
  req.body={...req.body,decoded}
  next()
  } catch (error) {
    res.status(401)
    res.send({error:'Invalid token or authorization'})
  }
  
}else{
  res.status(401)
  res.send({error:'Invalid token or authorization'})
}
}
