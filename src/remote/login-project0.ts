import { User } from "../models/User";
import { BadCredentialError } from "../errors/BadCredentialError";
import { InternalServerError } from "../errors/InternalServerError";
import { project0Client } from "./project0-client";



export async function project0Login(username: string, password: string): Promise<User> {
    let credentials = {
        username,
        password
    }
    try {


        let response = await project0Client.post('/login',credentials)

        if(response.status === 404){
            throw new BadCredentialError()
        }

        return await response.data
    } catch (e) {
        if(e.status === 404){
            throw e
        } else{
            throw new InternalServerError()
        }
    }
}