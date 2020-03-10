import { combineReducers } from "redux";
import { User } from "../models/User";
import { loginReducer } from "./login-reducer";
import { usersReducer } from "./users-reducer";
//import { usersReducer } from "./users-reducer";

//make interfaces for each "piece" of state
export interface ILoginState{
    user:User
    errorMessage:string
}

export interface IUsersState{
    allUsers:User[]
    errorMessage:string
}

//define all of the pieces of state
export interface IState{
    login:ILoginState
    users:IUsersState
}

//turn all individual pieces of state into a single state
export const state = combineReducers<IState>({
    login: loginReducer,
    users: usersReducer,
})