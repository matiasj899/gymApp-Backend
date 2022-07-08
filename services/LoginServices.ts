import bcrypt from 'bcrypt';
import User from '../models/UsersModel';
import jwt from "jsonwebtoken";
import 'dotenv/config'

const generateToken = (userExists: any) => {
    const secret:any=process.env.SECRET
    const { email, _id, role, userName, lastName } = userExists
    const token = jwt.sign({ email, _id, role, userName, lastName }, secret)
    return token
}

const checkPasswordValidity = async (userData: any, userExists: any) => {
    const correctPassword = await bcrypt.compare(userData.password, userExists.password)
    if (correctPassword) {

        const token = generateToken(userExists)
   
        return { msg: "Logged succesfully", token }
    } else {
        throw new Error("email or password are incorrect");
    }
}

export const logUser = async (userData: any) => {

    const userExists = await User.findOne({ email: userData.email }).select('+password')
    if (userExists) {
        const result = await checkPasswordValidity(userData, userExists)
        return result
    } else {
        throw new Error("email or password are incorrect");

    }
}