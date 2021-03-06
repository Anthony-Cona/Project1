import { AnyAction } from "redux";
import { reimbursementTypes } from "../action-mappers/view-reimbursement-action-mappers";
import { IReimbursementState } from ".";
import { Reimbursement } from "../models/Reimbursement";


const initialState: IReimbursementState = {
    allReimbursements:[],
    curretnReimbursement: new Reimbursement(0,0,0,"","","",0,0,0),
    errorMessage:'',
    newReimbursement:  new Reimbursement(0,0,0,"","","",0,0,0)
}

export const reimbursementReducer = (state = initialState, action:AnyAction ) =>{
    switch (action.type) {
        case reimbursementTypes.GET_ALL_REIMBURESMENTS:{
            return {
                ...state,
                allReimbursements:action.payload.allReimbursements
            }
        }  
        case reimbursementTypes.FAILED_TO_RETRIEVE_REIMBURSEMENTS:{
            return {
                ...state,
                errorMessage:'Failed to Retrieve Reimbursements'
            }
        }case reimbursementTypes.CREATED_NEW_REIMBURSEMENT: {
            return{
                ...state,
                newReimbursement:action.payload.newReimbursement
            }
        }case reimbursementTypes.RESET_SEARCH:{
            return initialState
        }
        default:
            return state;
    }
}