import React, { Component } from 'react';

import Classes from './MovieSearchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm,faWindowClose } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';
import SearchMovieAction from '../../store/actions/SearchMovieAction'
import ClearSearchAction from '../../store/actions/ClearSearchAction'
import MovieSearchResult from '../MovieSearchResult/MovieSearchResult'
import StateUtil from '../../util/StateUtil'

import { Col, Row } from 'antd'
import { Input} from 'antd';

class MovieSearchBox extends Component {

    constructor(props){
        super(props);
        this.searchFieldRef=React.createRef();
    }
    state={
        currentSearchQuery:null
    }

    clearSearch=()=>{
        clearTimeout(this.timeOutID);
        this.props.clearSearchResult()
        this.setState({
            ...this.state,
            currentSearchQuery: null
        })
    }
    handleSearchQueryValueUpdate=async(e)=>{
        try{
            await this.setState(StateUtil.getUpdatedKeyValueState(this.state, "currentSearchQuery", e.target.value))
            if (this.state.currentSearchQuery.trim().length!==0){
                this.onSearchHandler();
            }else{
                this.clearSearch();
            }
        }
        catch(e){
            console.error(e);
        }
    }

    timeOutID = 0;
    onSearchHandler = () => {
        clearTimeout(this.timeOutID);
        this.timeOutID = setTimeout(this.search, 500);
    }
    search=()=>{
        console.log(this.state.currentSearchQuery);
        this.props.searchMovie(this.state.currentSearchQuery.trim())
    }
    render() {
        const suffix = this.state.currentSearchQuery ? <FontAwesomeIcon icon={faWindowClose} onClick={this.clearSearch} /> : null;

        return (
            <Row>
                <Col span={24}>
                    <div className={Classes['searchBox']}>
                        <Input
                            placeholder="Start typing movie name here... ex Dark, Dark Knight"
                            prefix={<FontAwesomeIcon icon={faFilm} style={{ color: 'rgba(0,0,0,.25)' }} />} 
                            suffix={suffix}
                            value={this.state.currentSearchQuery} 
                            onChange={(e) => {this.handleSearchQueryValueUpdate(e)}}
                            ref={this.searchFieldRef}
                        />
                    </div>
                </Col>
                <Col span={24}>
                    <MovieSearchResult searchResult={this.props.searchResult}></MovieSearchResult>    
                </Col>
            </Row>

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
        searchMovie: (searchQuery) => dispatch(SearchMovieAction(searchQuery)),
        clearSearchResult: () => dispatch(ClearSearchAction())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchBox);