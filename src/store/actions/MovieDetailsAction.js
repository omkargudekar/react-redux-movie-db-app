import MovieDBService from '../../services/MovieDBService'
import * as ActionTypes from './ActionTypes';

const getMovie = async (title) => {
    try {

        let response = await MovieDBService.get("?i=" + title)
        console.log(response)

        return response;
    }
    catch (e) {
        throw e
    }
}


const MovieDetailsAction = (title) => {
    return async (dispatch) => {
        try {
            let searchResultResponse = await getMovie(title);
            if (searchResultResponse.data.Response == "True") {
                dispatch({
                    type: ActionTypes.GET_MOVIE_DETAILS,
                    payload: {
                        selectedMovieDetails: searchResultResponse.data,
                    }
                });
            } else if (searchResultResponse.data.Response == "False") {
                dispatch({
                    type: ActionTypes.GET_MOVIE_DETAILS,
                    payload: {
                        selectedMovieDetails: null,
                    }
                });
            }

        } catch (e) {
            console.error(e);
        }
    }
};

export default MovieDetailsAction;