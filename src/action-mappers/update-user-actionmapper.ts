import { Dispatch } from "redux"
import { project0UpdateUser } from "../remote/project0-users-remote"
import { User } from "../models/User"



export const updateUserTypes = {
    RETURN_UPDATE_USER: 'RETURN_UPDATE_USER',
    FAILED_TO_UPDATE_USER: 'FAILED_TO_UPDATE_USER',
    RESET_UPDATE_USER: 'RESET_UPDATE_USER'
}

export const updateUserActionMapper = (userId: number,userName: string, password: string, firstName: string, lastName: string, 
     email: string, roleId: number) => async (dispatch: Dispatch) => {

        try {
            let updatedUser = await project0UpdateUser(userId,userName,password,
                firstName,
                lastName,                
                email,
                roleId)

            dispatch({
                type: updateUserTypes.RETURN_UPDATE_USER,
                payload: {
                    updatedUser
                }
            })
        } catch (e) {
            dispatch({
                type: updateUserTypes.FAILED_TO_UPDATE_USER
            })
        }
    }

    export const resetUpdateUserActionmapper=() =>{
        return{
            type:updateUserTypes.RESET_UPDATE_USER
        }
    }