import React from 'react';
import SearchBox from '../../components/SearchBox/SearchBox'
import SearchResult from '../../components/SearchResult/SearchResult'
const SearchContainer = props => {
    return (
        <React.Fragment>
            <SearchBox> </SearchBox>
            <SearchResult></SearchResult>    
        </React.Fragment>
    );
};



export default SearchContainer;