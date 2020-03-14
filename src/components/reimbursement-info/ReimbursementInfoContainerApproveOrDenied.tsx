import { connect } from "react-redux";
import { ReimbursementInfoComponentApproveOrDenied } from "./ReimbursementInfoComponentApproveOrDenied";
import { IState } from "../../reducers";
import { updateReimbursementToApprovedOrDeniedActionMapper } from "../../action-mappers/view-reimbursement-action-mappers"


const mapStateToProps = (state:IState) => {
    return {
        currentReimbursement: state.reimbursements.curretnReimbursement
    }
}

const mapDispatchToProps = {
    updateReimbursementToApprovedOrDeniedActionMapper,
}

export default connect(mapStateToProps,mapDispatchToProps)(ReimbursementInfoComponentApproveOrDenied)
