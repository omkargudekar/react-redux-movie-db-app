import LoginService from '../../services/LoginService'
import * as ActionTypes from './ActionTypes'
import ErrorModal from '../../components/ErrorModal/ErrorModal'

const checkCredentials=async(params)=>{
    try{
        let loginServiceResponse = await LoginService.post(null,params);
        return loginServiceResponse;
    }
    catch(e){
        throw e;
    }
}

const loginSuccessAction=(email,token)=>{
    return {
        type:ActionTypes.LOGIN,
        payload:{
            loggedIn: true,
            token: email,
            loggedInUser: token
        }
    }
}
const loginFailAction = (error) => {
    ErrorModal.show("Authorization Error",error);
    return {
        type: ActionTypes.LOGIN,
        payload: {
            loggedIn: false,
            token: null,
            loggedInUser: null
        }
    }
}

const loginAction=(params)=>{
    return async(dispatch)=>{
        try{
            let loginResponse =await checkCredentials(params);
            if (loginResponse.status === 200 && loginResponse.data.token.length > 0) {
                dispatch(loginSuccessAction(params.email, loginResponse.data.token))
            }
        }catch(e){
            dispatch(loginFailAction("Failed to login"));
            
        }
    }
}

export default loginAction;