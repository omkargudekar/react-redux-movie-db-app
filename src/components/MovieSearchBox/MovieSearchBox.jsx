import React, { Component } from 'react';
import Form from '../UI/Form/Form'
import FormControlsGroup from '../UI/FormControlsGroup/FormControlsGroup'
import FormControl from '../UI/FormControl/FormControl'
import InputText from '../UI/InputText/InputText'
import Classes from './MovieSearchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';
import SearchMovieAction from '../../store/actions/SearchMovieAction'
import MovieSearchResult from '../MovieSearchResult/MovieSearchResult'


class MovieSearchBox extends Component {
    
    state={
        currentSearchQuery:null
    }

    timeOutID=0;
    updateSearchQuery=(e)=>{
        const currentSearchQuery = e.target.value;
        this.setState((oldState)=>{
            return {
                ...oldState,
                currentSearchQuery: currentSearchQuery || this.state.currentSearchQuery
            }
        })
    }
    onSearchHandler=()=>{
        clearTimeout(this.timeOutID);
        this.timeOutID = setTimeout(this.search, 500);
    }
    search=()=>{
        console.log(this.state.currentSearchQuery);
        this.props.searchMovie(this.state.currentSearchQuery)
    }
    render() {
        return (
            <React.Fragment>
                <div className={Classes['searchBox']}>
                    <Form >
                        <fieldset className={Classes['formFieldSet']}>
                            <legend className={Classes['formLegend']}><FontAwesomeIcon icon={faFilm} /> MDB</legend>
                        <FormControlsGroup>
                            <FormControl>
                                    <InputText 
                                            onKeyUp={(e) => { this.updateSearchQuery(e) }} onKeyPress={(e) => { this.onSearchHandler(e) }} 
                                            placeholder="Enter movie name..." 
                                            style={{ height: '35px', textIndent: "10px", border: "1px solid #000", borderRadius: "8px",outline:'none'}} >
                                    </InputText>
                            </FormControl>
                        </FormControlsGroup>
                        </fieldset>
                    </Form>
                </div>
                <MovieSearchResult searchResult={this.props.searchResult}></MovieSearchResult>    
            </React.Fragment>

        );
    }
}


const mapStateToProps=(state)=>{
    return {
        searchResult: state.searchResultReducerSlice.searchResult
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        searchMovie: (searchQuery) => dispatch(SearchMovieAction(searchQuery))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchBox);