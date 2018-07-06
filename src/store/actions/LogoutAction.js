import * as ActionTypes from './ActionTypes'

const getLogoutPayload = () => {
    return {
        type: ActionTypes.LOGIN,
        payload: {
            loggedIn: false,
            token: null,
            loggedInUser: null
        }
    }
}

const logoutAction = () => {
    return (dispatch) => {
        dispatch(getLogoutPayload());

    }
}

export default logoutAction;