import { IState } from "../../reducers";
import { getAllReimbursementsActionMapper } from '../../action-mappers/view-reimbursement-action-mappers'
import { connect } from "react-redux";
import { ViewAllReimbursementsComponent } from "./ViewAllReimbursementsComponent";


const mapStateToProps = (state:IState) => {
    return {
        allReimbursements:state.reimbursements.allReimbursements,
        errorMessage: state.reimbursements.errorMessage,
        currentUser: state.login.user
    }
}

const mapDispatchToProps = {
    getAllReimbursementsActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllReimbursementsComponent)