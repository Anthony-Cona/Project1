import { InternalServerError } from "../errors/InternalServerError"
import { project0Client } from "./project0-client"


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


