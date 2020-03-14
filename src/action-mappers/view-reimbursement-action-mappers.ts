import { Dispatch } from "redux";
import { project0GetReimbursementById, project0GetReimbursementByStatus, project0UpdateReimbursement } from "../remote/project0-reimbursement-remote";
import { Reimbursement } from "../models/Reimbursement";

export const reimbursementTypes = {
    GET_ALL_REIMBURESMENTS: 'GET_REIMBURSEMENT_BY_ID',
    FAILED_TO_RETRIEVE_REIMBURSEMENTS:'FAILED_TO_RETRIEVE_REIMBURSEMENTS',
    RETURN_UPDATED_REIMBURSEMENT: 'RETURN_UPDATED_REIMBURSEMENT',
    RESET_SEARCH: 'RESET_SEARCH'
}


export const getReimbursementsByIdActionMapper = (id:number) => async (dispatch:Dispatch) => {
    // try to get all users from a remote function
    try{
        let allReimbursements:Reimbursement[] = await project0GetReimbursementById(id)
        //if we do call dispatch with those users
        dispatch({
            type: reimbursementTypes.GET_ALL_REIMBURESMENTS,
            payload:{
                allReimbursements
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

export const getReimbursementsByStatusActionMapper = (id:number) => async (dispatch:Dispatch) => {
    // try to get all users from a remote function
    try{
        let allReimbursements:Reimbursement[] = await project0GetReimbursementByStatus(id)
        //if we do call dispatch with those users
        dispatch({
            type: reimbursementTypes.GET_ALL_REIMBURESMENTS,
            payload:{
                allReimbursements
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

export const updateReimbursementToApprovedOrDeniedActionMapper = (reimbursement:Reimbursement) => async (dispatch:Dispatch) => {
    try {
        let updatedReimbursement = await project0UpdateReimbursement(reimbursement)

        dispatch({
            type: reimbursementTypes.RETURN_UPDATED_REIMBURSEMENT,
            payload:{
                updatedReimbursement
            }
        })
    } catch (e) {
        dispatch({
            type:reimbursementTypes.FAILED_TO_RETRIEVE_REIMBURSEMENTS
        })
    }
}

export const resetReimbursementsActionMapper = () => {
    return{
        type:reimbursementTypes.RESET_SEARCH
    }
}