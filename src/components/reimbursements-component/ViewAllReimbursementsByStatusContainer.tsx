import { IState } from "../../reducers";
import { getReimbursementsByStatusActionMapper, resetReimbursementsActionMapper, updateReimbursementToApprovedOrDeniedActionMapper } from '../../action-mappers/view-reimbursement-action-mappers'
import { connect } from "react-redux";
import { ViewAllReimbursementsByStatusComponent } from "./ViewAllReimbursementsByStatusComponent";


const mapStateToProps = (state:IState) => {
    return {
        allReimbursements:state.reimbursements.allReimbursements,
        errorMessage: state.reimbursements.errorMessage,
        currentUser: state.login.user,
        currentReimbursement: state.reimbursements.curretnReimbursement

    }
}

const mapDispatchToProps = {
    getReimbursementsByStatusActionMapper,
    resetReimbursementsActionMapper,
    updateReimbursementToApprovedOrDeniedActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllReimbursementsByStatusComponent)