import React from 'react';
import MovieCard from '../MovieCard/MovieCard'
const SearchResult = (props) => {

    const renderSearchResult=()=>{
        if (props.searchResult && props.searchResult.length>0){
            return props.searchResult.map((el, index) => {
                return <MovieCard data={el.data} key={index}></MovieCard>
            });
        }
        return <span>No result to display.</span>
    }
    
    return (
        <React.Fragment>
            {renderSearchResult()}
        </React.Fragment>
    );
};

export default SearchResult;