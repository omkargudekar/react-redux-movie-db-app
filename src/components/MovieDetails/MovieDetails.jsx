import React, { Component } from 'react';
import MovieDetailsAction from '../../store/actions/MovieDetailsAction'
import MovieDetailsCard from '../MovieDetailsCard/MovieDetailsCard'
import {connect} from 'react-redux';
import {Row,Col} from 'antd'
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
            <Col sapn={24}>
                <MovieDetailsCard data={data}></MovieDetailsCard>
            </Col>
            );
    }
    render() {
        return (
            <Row>
                {(this.props.movieDetails) ? this.renderMovieDetails(this.props.movieDetails):<span>No movie with that title</span>}
            </Row>
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