import Muscle from '../models/MuscleGroupModel';

export const getMusclesGroups = async () => {
    const data = await Muscle.find()
    return data
};

export const getMusclesGroupsById = async (id: string) => {
    const data = await Muscle.findById(id)

    return data
}

export const createMusclesGroups = async (newMuscleGroup: object) => {
    const data = await Muscle.create(newMuscleGroup)

    return data}