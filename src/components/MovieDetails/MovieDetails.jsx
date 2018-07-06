import React, { Component } from 'react';
import MovieDetailsAction from '../../store/actions/MovieDetailsAction'
import {connect} from 'react-redux';

class MovieDetails extends Component {

    loadMovie=()=>{
        if (this.props.match.params.id !== this.state.id) {
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
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div>{data.Title} ({data.Year})</div>
                            <div><img src={data.Poster} alt="" style={{ height: "200px" }} /></div>
                            <div>Writer: {data.Writer}</div>
                            <div>Director: {data.Director}</div>
                            <div>Actors: {data.Actors}</div>
                            <div>Runtime: {data.Runtime}</div>
                            <div>Genre: {data.Genre}</div>
                            <div>Plot: {data.Plot}</div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
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