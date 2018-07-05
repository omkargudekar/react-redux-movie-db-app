import React, { Component } from 'react';
import _ from 'lodash';
import MovieDetailsAction from '../../store/actions/MovieDetailsAction'
import {connect} from 'react-redux';

const dataConfig={
    Title:{
        keyToText:'Title',
        renderFn:(value)=>{
            return value;
        }
    },
    Rated:{
        keyToText: 'Viewers Rating',
    },
    Poster:{
        renderFn: (value) => {
            return <img src={value} alt="Movie Poster" />;
        }
    },
    Released:{
        keyToText: 'Release Date',
    }
}

const getDataConfigProperty=(key,config)=>{
    if (dataConfig[key] && dataConfig[key][config]){
        return dataConfig[key][config];
    }
    return null;
}


class MovieDetails extends Component {

    loadMovie=()=>{
        if (this.props.match.params.id != this.state.id) {
            this.setState({
                id: this.props.match.params.id
            });
            this.props.getMovieDetails(this.props.match.params.id)
        }

    }
    state={
        id:null
    }
    componentDidMount(){
        this.loadMovie();
    }
    componentDidUpdate() {
        this.loadMovie();
    }


    renderMovieDetails = (data)=>{
        console.log(data)
        return (
                <table>
                    <tbody>
                    </tbody>
                </table>
            );
    }
    render() {
        return (
                <React.Fragment>
                {(this.props.movieDetails) ? this.renderMovieDetails(this.props.movieDetails):<span>No movie with that title</span>}
                </React.Fragment>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        movieDetails: state.movieDetailsReducerSlice.selectedMovieDetails
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getMovieDetails: (titleId) => dispatch(MovieDetailsAction(titleId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails);