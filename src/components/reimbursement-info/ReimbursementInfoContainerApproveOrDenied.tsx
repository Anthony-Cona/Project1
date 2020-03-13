import { connect } from "react-redux";
import { ReimbursementInfoComponentApproveOrDenied } from "./ReimbursementInfoComponentApproveOrDenied";
import { IState } from "../../reducers";



const mapStateToProps = (state:IState) => {
    return {
        currentReimbursement: state.reimbursements.curretnReimbursement
    }
}

export default connect(mapStateToProps)(ReimbursementInfoComponentApproveOrDenied)
