
import StateUtil from '../../util/StateUtil'
import * as ActionTypes from '../actions/ActionTypes'

const initialState={
    loggedIn:false
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.LOGIN:
            return StateUtil.getUpdatedState(state,{login:action.value})
        default:
            return state;

    }
}

export default reducer;