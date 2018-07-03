import React from 'react';

const MovieCard = (props) => {
    return (
        <div>
            <div>{props.data.Title}</div>
            <div>
                <img src={props.data.Poster} alt={props.data.Title}/>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Year</td>
                            <td>{props.data.Year}</td>
                        </tr>
                        <tr>
                            <td>Rated</td>
                            <td>{props.data.Rated}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MovieCard;