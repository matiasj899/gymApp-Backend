import Objective from "../models/ObjectiveModel";

export const getObjective = async () => {
    const data = await Objective.find()
    return data
};

export const getObjectiveById = async (id: string) => {
    const data = await Objective.findById(id)

    return data
}

export const createObjective = async (newObjective: object) => {
    const data = await Objective.create(newObjective)

    return data}