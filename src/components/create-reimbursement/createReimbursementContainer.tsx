import { IState } from "../../reducers";
import { connect } from "react-redux";
import { CreateReimbursementComponent } from "./createReimbursementComponent";
import {createNewReimbursementActionMapper} from "../../action-mappers/view-reimbursement-action-mappers"

const mapStateToProps = (state:IState) => {
    return{
        currentUser: state.login.user,
    }
}

const mapDispatchToProps = {
    createNewReimbursementActionMapper

}

export default connect(mapStateToProps,mapDispatchToProps)(CreateReimbursementComponent)