import User from "../models/UsersModel";

export const getUsers = async () => {
    const data = await User.find()
    return data
};

export const getUserById = async (id: string) => {
    const data = await User.findById(id)

    return data
}

export const createUser = async (user: object) => {
    const data = await User.create(user)

    return data
}