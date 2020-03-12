import { Dispatch } from "redux";
import { User } from "../models/User";
import { project0GetOneUser } from "../remote/project0-one-user-remote";

export const oneUserType = {
    GET_ONE_USER: 'GET_ONE_USER',
    FAILED_TO_RETRIEVE_ONE_USER: 'FAILED_TO_RETRIEVE_ONE_USER',
    RESET_SEARCH:'RESET_SEARCH'
}



export const getOneUserActionMapper = (id:number) => async (dispatch:Dispatch) => {

    try{
        let viewUser = await project0GetOneUser(id)

        dispatch({
            type: oneUserType.GET_ONE_USER,
            payload:{
                viewUser
            }
        })
    }catch (e){
        dispatch({
            type: oneUserType.FAILED_TO_RETRIEVE_ONE_USER
        })
    }
}

export const resetOneUserActionMapper = () => {
    return{
        type:oneUserType.RESET_SEARCH
    }
}