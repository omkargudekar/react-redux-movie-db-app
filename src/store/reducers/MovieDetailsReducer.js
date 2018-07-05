
import StateUtil from '../../util/StateUtil'
import * as ActionTypes from '../actions/ActionTypes'
const initialState = {
    selectedMovieDetails: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_MOVIE_DETAILS:
            return StateUtil.getUpdatedState(state, { selectedMovieDetails: action.payload.selectedMovieDetails })
        default:
            return state;

    }
}

export default reducer;