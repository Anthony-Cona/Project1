import { IOneUserState } from ".";
import { User } from "../models/User";
import { Role } from "../models/Role";
import {AnyAction} from "redux"
import { oneUserType } from "../action-mappers/view-one-user-actionmapper";


const initialState: IOneUserState = {
    viewUser: new User(0, '', '', '', '', '', new Role(0, '')),
    errorMessage: ''
}

export const oneUserReducer = (state = initialState, action:AnyAction ) => {
    switch (action.type) {
        case oneUserType.GET_ONE_USER: {
            return {
                ...state,
                viewUser:action.payload.viewUser
            }
        }case oneUserType.FAILED_TO_RETRIEVE_ONE_USER:{
            return{
                ...state,
                errorMessage:'Failed to Retrieve User'
            }
        }case oneUserType.RESET_SEARCH:{
            return initialState
        }
        default:
            return state;
    }
}