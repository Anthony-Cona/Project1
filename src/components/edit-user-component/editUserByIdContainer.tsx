import { IState } from "../../reducers";
import { getOneUserActionMapper, resetOneUserActionMapper} from "../../action-mappers/view-one-user-actionmapper"
import { updateUserActionMapper} from "../../action-mappers/update-user-actionmapper"
import { connect } from "react-redux";
import { EditUserByIdComponent } from "./editUserByIdComponent";

const mapStateToProps = (state:IState) => {
    return{
        currentUser: state.login.user,
        viewUser: state.oneUser.viewUser
    }
}

const mapDispatchToProps = {
    getOneUserActionMapper,
    updateUserActionMapper,
    resetOneUserActionMapper

}

export default connect(mapStateToProps,mapDispatchToProps)(EditUserByIdComponent)