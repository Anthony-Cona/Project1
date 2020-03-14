import { InternalServerError } from "../errors/InternalServerError"
import { project0Client } from "./project0-client"
import { Reimbursement } from "../models/Reimbursement"


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

export const project0GetReimbursementByStatus = async (id:number) => {
    try {
        let response = await project0Client.get(`reimbursements/status/${id}`)
        if(response.status === 200){
            return response.data
        }else {
            throw new InternalServerError()
        }
    } catch (e){
        throw new InternalServerError()
    }
}

export const project0UpdateReimbursement = async (reimbursement:Reimbursement) => {
    try{
        let response = await project0Client.patch(`reimbursements`,reimbursement)
        if(response.status === 200){
            return response.data
        }else{
            throw new InternalServerError()
        }
    }catch (e){
        throw new InternalServerError()
    }
}


