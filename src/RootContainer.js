import React from 'react';
import App from './App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunkMiddleware from 'redux-thunk'
import LoggerMiddleware from './store/middlewares/LoggerMiddleware'
import LoginReducer from './store/reducers/LoginReducer';
import MovieDetailsReducer from './store/reducers/MovieDetailsReducer';
import SearchResultReducer from './store/reducers/SearchResultReducer';
import { Provider } from 'react-redux';


const RootReducer = combineReducers(
    {
        loginReducerSlice: LoginReducer,
        movieDetailsReducerSlice: MovieDetailsReducer,
        searchResultReducerSlice: SearchResultReducer
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(ReduxThunkMiddleware, LoggerMiddleware)));


const RootContainer = props => {
    return (
            <Provider store={store}>
                    <App />
            </Provider>
    );
};


export default RootContainer;


