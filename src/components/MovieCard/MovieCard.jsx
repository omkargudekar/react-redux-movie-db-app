import React from 'react';
import Classes from './MovieCard.css'
import {Link} from 'react-router-dom'

const MovieCard = (props) => {
    return (
        <Link to={{pathname: '/movie/' + props.data.imdbID}}>
            <div className={Classes["movieCard"]}>
                <div >
                    <img src={props.data.Poster} className={Classes["movieCardPoster"]} alt={props.data.Title}/>
                </div>
                <div className={Classes["movieCardField"]}><span className={Classes["movieCardTitle"]}>{props.data.Title}</span></div>
                <div className={Classes["movieCardField"]}>({props.data.Year})</div>
            </div>
        </Link>

    );
};

export default MovieCard;