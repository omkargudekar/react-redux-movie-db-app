import React, { Component } from 'react';
import LoginFormContainer from './containers/LoginFormContainer/LoginFormContainer'
import SearchContainer from './containers/SearchContainer/SearchContainer'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Movie from './components/Movie/Movie'
import {Route, BrowserRouter} from 'react-router-dom'
import './App.css';

import LoginReducer from './store/reducers/LoginReducer';
import MovieDetailsReducer from './store/reducers/MovieDetailsReducer';
import SearchResultReducer from './store/reducers/SearchResultReducer';

import redux_thunk from 'redux-thunk'
import {createStore,combineReducers,applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';

const RootReducer = combineReducers({ loginReducerSlice: LoginReducer, movieDetailsReducerSlice: MovieDetailsReducer, searchResultReducerSlice:SearchResultReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(RootReducer, composeEnhancers(applyMiddleware(redux_thunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <NavigationBar></NavigationBar>
            <Route path="/login" component={LoginFormContainer}></Route>
            <Route path="/search" component={SearchContainer}></Route>
            <Route path="/movie/:id" component={Movie}></Route>
            <Route path="/logout" render={()=>{return <div>You Logged out</div> }}></Route>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
