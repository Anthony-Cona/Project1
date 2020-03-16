import { combineReducers } from "redux";
import { User } from "../models/User";
import { loginReducer } from "./login-reducer";
import { usersReducer } from "./users-reducer";
import { oneUserReducer } from "./one-user-reducer";
import { Reimbursement } from "../models/Reimbursement";
import { reimbursementReducer } from "./reimbursment-reducer";
import { updateUserReducer } from "./update-user-reducer";
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

export interface IUpdateUserState{
  updatedUser:User
  errorMessage:string
}

export interface IOneUserState{
    viewUser: User
    errorMessage: string
}

export interface IReimbursementState{
    allReimbursements: Reimbursement[]
    curretnReimbursement: Reimbursement
    errorMessage: string
    newReimbursement:Reimbursement
}

//define all of the pieces of state
export interface IState{
    login:ILoginState
    users:IUsersState
    oneUser:IOneUserState
    reimbursements:IReimbursementState
    updateUser:IUpdateUserState
}

//turn all individual pieces of state into a single state
export const state = combineReducers<IState>({
    login: loginReducer,
    users: usersReducer,
    oneUser: oneUserReducer,
    reimbursements: reimbursementReducer,
    updateUser: updateUserReducer,
})