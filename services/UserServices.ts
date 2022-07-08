import User from "../models/UsersModel";
import bcrypt from "bcrypt"

export const getUsers = async () => {
    const data = await User.find().populate({
        path:"roleId"})
    return data
};

export const getUserById = async (id: string) => {
    const data = await User.findById(id).populate({
        path:"roleId"})

    return data
}

const hashUserPassword=async (user:any)=>{
    const password=user.password
    const saltRounds=10
    const hashPassword=await bcrypt.hash(password,saltRounds)
    user.password=hashPassword
    return user
}
export const createUser = async (user:any) => {
   
   const userWithHashedPassWord= await hashUserPassword(user)

    const data = await User.create(userWithHashedPassWord)

    return data
}