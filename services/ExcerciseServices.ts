import Excercise from "../models/ExcerciseModel";


export const getExcercises = async () => {
    const data = await Excercise.find()
    return data
};

export const getExcerciseById = async (id: string) => {
    const data = await Excercise.findById(id)

    return data
}

export const createExcercise = async (newExcercise: object) => {
    const data = await Excercise.create(newExcercise)

    return data}