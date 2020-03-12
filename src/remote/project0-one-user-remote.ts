import { project0Client } from "./project0-client"
import { InternalServerError } from "../errors/InternalServerError"
import { User } from "../models/User"



export const project0GetOneUser = async (id: number) => {
    try {
        let response = await project0Client.get(`/users/${id}`)
        if (response.status === 200) {
            return response.data
        } else {
            throw new InternalServerError()
        }
    } catch (e) {
        throw new InternalServerError()
    }
}