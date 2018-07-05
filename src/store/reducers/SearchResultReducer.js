
import StateUtil from '../../util/StateUtil'
import * as ActionTypes from '../actions/ActionTypes'
const initialState = {
    searchResult: [{ "Title": "Guardians of the Galaxy Vol. 2", "Year": "2017", "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg"}]
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