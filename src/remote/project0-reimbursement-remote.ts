import { InternalServerError } from "../errors/InternalServerError"
import { project0Client } from "./project0-client"


export const project0GetReimbursementById = async (id:number) => {
    try {
        let response = await project0Client.get(`/reimbursements/author/userId/${id}`)
        if(response.status === 200){
            return response.data
        }else {
            throw new InternalServerError()
        }
    } catch (e){
        throw new InternalServerError()
    }
}


