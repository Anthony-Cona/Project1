import { Dispatch } from "redux";
import { User } from "../models/User";
import { project0GetAllReimbursement } from "../remote/project0-reimbursement-remote";
import { Reimbursement } from "../models/Reimbursement";

export const reimbursementTypes = {
    GET_ALL_REIMBURESMENTS: 'GET_ALL_IMBURSEMENTS',
    FAILED_TO_RETRIEVE_REIMBURSEMENTS:'FAILED_TO_RETRIEVE_REIMBURSEMENTS'
}



export const getAllReimbursementsActionMapper = () => async (dispatch:Dispatch) => {
    // try to get all users from a remote function
    try{
        let allReimburesments:Reimbursement[] = await project0GetAllReimbursement()
        //if we do call dispatch with those users
        dispatch({
            type: reimbursementTypes.GET_ALL_REIMBURESMENTS,
            payload:{
                allReimburesments
            }
        })
    } catch (e){
            //catch any errors and dispatch a bad action
        dispatch({
            type:reimbursementTypes.FAILED_TO_RETRIEVE_REIMBURSEMENTS
        })
    }
    //function completes
}