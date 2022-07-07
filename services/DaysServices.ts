import Day from '../models/DaysModel';


export const getDays = async () => {
    const data = await Day.find()
    return data
};

export const getDaysById = async (id: string) => {
    const data = await Day.findById(id)

    return data
}

export const createDay = async (newDay: object) => {
    const data = await Day.create(newDay)

    return data}