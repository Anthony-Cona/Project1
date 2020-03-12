import { IState } from "../../reducers";
import { getReimbursementsByIdActionMapper, resetReimbursementsActionMapper } from '../../action-mappers/view-reimbursement-action-mappers'
import { connect } from "react-redux";
import { ViewAllReimbursementsByIdComponent } from "./ViewAllReimbursementsByIdComponent";


const mapStateToProps = (state:IState) => {
    return {
        allReimbursements:state.reimbursements.allReimbursements,
        errorMessage: state.reimbursements.errorMessage,
        currentUser: state.login.user
    }
}

const mapDispatchToProps = {
    getReimbursementsByIdActionMapper,
    resetReimbursementsActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllReimbursementsByIdComponent)