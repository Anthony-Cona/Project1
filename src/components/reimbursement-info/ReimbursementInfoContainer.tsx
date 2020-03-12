import { connect } from "react-redux";
import { ReimbursementInfoComponent } from "./ReimbursementInfoComponent";
import { IState } from "../../reducers";



const mapStateToProps = (state:IState) => {
    return {
        currentReimbursement: state.reimbursements.curretnReimbursement
    }
}

export default connect(mapStateToProps)(ReimbursementInfoComponent)