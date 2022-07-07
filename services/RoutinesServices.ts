import Routine from "../models/RoutineModel";

export const getRoutines = async () => {
    const data = await Routine.find()
    return data
};

export const getRoutineById = async (id: string) => {
    const data = await Routine.findById(id)

    return data
}

export const createRoutine = async (newRoutine: object) => {
    const data = await Routine.create(newRoutine)

    return data}