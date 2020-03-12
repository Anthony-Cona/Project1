import { IState } from "../../reducers";
import { getOneUserActionMapper, resetOneUserActionMapper} from "../../action-mappers/view-one-user-actionmapper"
import { connect } from "react-redux";
import { ViewOneUserComponent } from "./ViewOneUserComponent";


const mapStateToProps = (state:IState) => {
    return{
    currentUser: state.login.user,
    viewUser: state.oneUser.viewUser,
    errorMessage: state.oneUser.errorMessage
    }
}

const mapDispatchToProps = {
    getOneUserActionMapper,
    resetOneUserActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewOneUserComponent)