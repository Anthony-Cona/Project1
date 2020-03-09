import { Dispatch } from "redux";
import { project0Login } from "../remote/login-project0";

export const loginTypes = {
    SUCCESSFUL_LOGIN : 'SUCCESSFUL_LOGIN',
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
    INTERNAL_SERVER: 'INTERNAL_SERVER_ERROR'
}


//an action object is a simple object
// it has two fields one of which is optional
// it has a mandatory type and an optional payload

//this pattern of function is called a thunk
// that is a function that immediately returns another function
export const project0LoginActionMapper = (username:string, password:string) => async  (dispatch:Dispatch) => {
    try {
        let user = await project0Login(username,password)
        dispatch({
          type:  loginTypes.SUCCESSFUL_LOGIN,
          payload:{
              user
          }
        })
    }catch(e){
        if(e.status === 400){
            dispatch({
                type:loginTypes.INVALID_CREDENTIALS
            })
        }else {
            dispatch({
                type:loginTypes.INTERNAL_SERVER
            })
        }
    }

}