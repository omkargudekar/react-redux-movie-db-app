import React from 'react';
import MovieCard from '../MovieCard/MovieCard'
const SearchResult = (props) => {

    const searchResult=()=>{
        return props.searchResult.map((el)=>{
            return <MovieCard data={el.data}/>
        })();
    }
    
    return (
        <React.Fragment>
            {searchResult}
        </React.Fragment>
    );
};

export default SearchResult;