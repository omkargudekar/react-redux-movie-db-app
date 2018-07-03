
import StateUtil from '../../util/StateUtil'
import * as ActionTypes from '../actions/ActionTypes'
const initialState = {
    SelectedMovieDetails: [{ "Title": "Guardians of the Galaxy Vol. 2", "Year": "2017", "Rated": "PG-13", "Released": "05 May 2017", "Runtime": "136 min", "Genre": "Action, Adventure, Sci-Fi", "Director": "James Gunn", "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)", "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel", "Plot": "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.", "Language": "English", "Country": "USA", "Awards": "Nominated for 1 Oscar. Another 12 wins & 42 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.7/10" }, { "Source": "Rotten Tomatoes", "Value": "83%" }, { "Source": "Metacritic", "Value": "67/100" }], "Metascore": "67", "imdbRating": "7.7", "imdbVotes": "388,497", "imdbID": "tt3896198", "Type": "movie", "DVD": "22 Aug 2017", "BoxOffice": "$389,804,217", "Production": "Walt Disney Pictures", "Website": "https://marvel.com/guardians", "Response": "True" }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_MOVIE_DETAILS:
            return StateUtil.getUpdatedState(state, { SelectedMovieDetails: action.value })
        default:
            return state;

    }
}

export default reducer;