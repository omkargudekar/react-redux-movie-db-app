
import StateUtil from '../../util/StateUtil'
import * as ActionTypes from '../actions/ActionTypes'
const initialState = {
    searchResult:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_MOVIE:
            return StateUtil.getUpdatedState(state, { searchResult: action.payload.searchResult })
        default:
            return state;

    }
}

export default reducer;