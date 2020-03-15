import { IUpdateUserState } from ".";
import { AnyAction } from "redux";
import { updateUserTypes } from "../action-mappers/update-user-actionmapper";
import { User } from "../models/User";
import { Role } from "../models/Role";


const initalState:IUpdateUserState ={
    updatedUser:new User(0,'','','','','',new Role(0,'')),
    errorMessage:'',
}

export const updateUserReducer = (state = initalState,action:AnyAction) =>{
    switch (action.type) {
        case updateUserTypes.RETURN_UPDATE_USER:{
            return{
                ...state,
                updatedUser:action.payload.updatedUser
            }
        }case updateUserTypes.FAILED_TO_UPDATE_USER:{
            return {
                ...state,
                errorMessage:'Failed to Update User'
            }
        }case updateUserTypes.RESET_UPDATE_USER:{
            return initalState
        }
        default:
            return state
    }
}

