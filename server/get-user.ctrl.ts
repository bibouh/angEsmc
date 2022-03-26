import {Request , Response} from "express"
import { USERS } from "./users"

export function getAllUsers(req:Request , res:Response){
  setTimeout(()=>{
    res.status(200).json({payload:Object.values(USERS)})
  },200)
}

export function getUserByEmail(req:Request , res:Response){
  const email = req.body.email
  const pwd = req.body.password
  const users: any = Object.values(USERS)

  const user = users.find((users:any)=>users.email === email && users.password ==pwd)

  //(users !== undefined)?res.status(200).json(user) : res.status(400).json('error')

  if (user !== undefined) {
    res.status(200).json(user)
  } else {
    res.status(400).json("error")
  }
}
