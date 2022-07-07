import TrainingLevel from "../models/TrainingLevelModel";

export const getTrainingLevel = async () => {
    const data = await TrainingLevel.find()
    return data
};

export const getTrainingLevelById = async (id: string) => {
    const data = await TrainingLevel.findById(id)

    return data
}

export const createTrainingLevel = async (newTrainingLevel: object) => {
    const data = await TrainingLevel.create(newTrainingLevel)

    return data}