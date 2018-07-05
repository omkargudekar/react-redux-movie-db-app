import React from 'react';
import Classes from './MovieCard.css'
const MovieCard = (props) => {
    return (
        <div className={Classes["movieCard"]}>
            <div >
                <img src={props.data.Poster} className={Classes["movieCardPoster"]} alt={props.data.Title}/>
            </div>
            <div className={Classes["movieCardTitle"]}>{props.data.Title}</div>
            <div className={Classes["movieCardTitle"]}>({props.data.Year})</div>
        </div>
    );
};

export default MovieCard;