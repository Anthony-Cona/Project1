import { InternalServerError } from "../errors/InternalServerError"
import { project0Client } from "./project0-client"
import { User } from "../models/User"


export const project0GetAllUsers = async () => {
    try {
        let response = await project0Client.get('/users')
        if(response.status === 200){
            return response.data
        }else {
            throw new InternalServerError()
        }
    } catch (e){
        throw new InternalServerError()
    }
}

export const project0UpdateUser = async (userId:number, userName:string, password:string,firstName:string, lastName:string, email:string, role:number) => {
    let updateUser = {userName, password, email, userId, firstName, lastName, role,    
    }    
    try {
        let response = await project0Client.patch('/users', updateUser)
        if(response.status === 200){
            return response.data
        }else {
            throw new InternalServerError()
        }
    } catch (e) {
        throw new InternalServerError()
    }
}


