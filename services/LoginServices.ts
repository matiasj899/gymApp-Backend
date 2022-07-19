import bcrypt from 'bcrypt';
import User from '../models/UsersModel';
import jwt from "jsonwebtoken";
import 'dotenv/config'

const generateToken = (userExists: any) => {
    const secret:any=process.env.SECRET
    console.log(userExists)
    const { email, _id, roleId, userName, lastName } = userExists
    const token = jwt.sign({ email, _id, roleId, userName, lastName }, secret)
    return token
}

const checkPasswordValidity = async (userData: any, userExists: any) => {
    const correctPassword = await bcrypt.compare(userData.password, userExists.password)
    if (correctPassword) {

        const token = generateToken(userExists)
   
        return { msg: "Logged succesfully",userExists, token }
    } else {
        throw new Error("email or password are incorrect");
    }
}

export const logUser = async (userData: any) => {

    const userExists = await User.findOne({ email: userData.email }).select('+password').populate({
        path:"roleId"})
    if (userExists) {
        const result = await checkPasswordValidity(userData, userExists)
        return result
    } else {
        throw new Error("email or password are incorrect");

    }
}