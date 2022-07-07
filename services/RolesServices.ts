import Role from "../models/RoleModel";

export const getRoles=async()=>{
 const data=await Role.find();
 return data
}
export const createRole=async(role:object)=>{
    const data = await Role.create(role)

    return data
   }