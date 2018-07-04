
import StateUtil from '../../util/StateUtil'
import * as ActionTypes from '../actions/ActionTypes'

const initialState={
    loggedIn:false,
    token:null,
    loggedInUser:null
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.LOGIN:
            return StateUtil.getUpdatedState(state,{...action.payload})
        default:
            return state;
    }
}

export default reducer;