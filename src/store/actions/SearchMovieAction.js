import MovieDBService from '../../services/MovieDBService'
import * as ActionTypes from './ActionTypes';

const searchMovie=async(searchQuery)=>{
    try{
        let response = await MovieDBService.get("?s=" + searchQuery)
        return response;
    }
    catch(e){
        throw e
    }
}


const SearchMovieAction = (searchQuery) => {
    return async(dispatch)=>{
        try{
            let searchResultResponse = await searchMovie(searchQuery);
            if (searchResultResponse.data.Response==="True"){
                dispatch({
                    type: ActionTypes.SEARCH_MOVIE,
                    payload: {
                        searchResult: searchResultResponse.data.Search,
                    }
                });
            } else if (searchResultResponse.data.Response === "False"){
                dispatch({
                    type: ActionTypes.SEARCH_MOVIE,
                    payload: {
                        searchResult: [],
                    }
                });
            }

        }catch(e){
            console.error(e);
        }
    }
};

export default SearchMovieAction;