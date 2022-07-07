import User from "../models/UsersModel";

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

export const createUser = async (user: object) => {
    const data = await User.create(user)

    return data
}