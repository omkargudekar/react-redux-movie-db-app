import React from 'react';
import MovieSearchBox from '../MovieSearchBox/MovieSearchBox'
import MovieSearchResult from '../MovieSearchResult/MovieSearchResult'
const MovieSearchContainer = props => {
    return (
        <React.Fragment>
            <MovieSearchBox> </MovieSearchBox>
            <MovieSearchResult></MovieSearchResult>    
        </React.Fragment>
    );
};



export default MovieSearchContainer;