import React, { Component } from 'react';
import MovieDetailsAction from '../../store/actions/MovieDetailsAction'
import MovieDetailsCard from '../MovieDetailsCard/MovieDetailsCard'
import {connect} from 'react-redux';
import {Row,Col,Button} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'

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
        return (data.imdbID === this.state.id) ? <Col sapn={24}> <MovieDetailsCard data={data}></MovieDetailsCard></Col>:null
    }
    render() {
        return (
            <Row>
                {(this.props.location.hash==='#search')?<Col style={{margin:"20px",padding:"20px"}} span={24}><Button onClick={()=>{this.props.history.goBack()}}> <FontAwesomeIcon icon={faUndo} /> Back to search</Button></Col>:null}
                <Col span={24}>
                    {(this.props.movieDetails) ? this.renderMovieDetails(this.props.movieDetails):"No movie with that title"}
                </Col>
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