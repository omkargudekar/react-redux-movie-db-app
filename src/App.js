import React, { Component } from 'react';
import LoginForm from './components/LoginForm/LoginForm'
import MovieSearchContainer from './components/MovieSearchContainer/MovieSearchContainer'
import NavigationBar from './components/NavigationBar/NavigationBar'
import MovieDetails from './components/MovieDetails/MovieDetails'
import {Route, BrowserRouter,Switch} from 'react-router-dom'
import WrapperHOC from './hoc/WrapperHOC/WrapperHOC'
import LoginReducer from './store/reducers/LoginReducer';
import MovieDetailsReducer from './store/reducers/MovieDetailsReducer';
import SearchResultReducer from './store/reducers/SearchResultReducer';
import Logout from './components/Logout/Logout'
import ReduxThunkMiddleware from 'redux-thunk'
import LoggerMiddleware from './store/middlewares/LoggerMiddleware'
import {createStore,combineReducers,applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import './App.css';

const RootReducer = combineReducers(
  { 
    loginReducerSlice: LoginReducer, 
    movieDetailsReducerSlice: MovieDetailsReducer, 
    searchResultReducerSlice:SearchResultReducer
  }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(ReduxThunkMiddleware, LoggerMiddleware)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <WrapperHOC>  
            <NavigationBar></NavigationBar>
            <Switch>
              <Route path="/login" component={LoginForm}></Route>
              <Route path="/search" component={MovieSearchContainer}></Route>
              <Route path="/movie/:id" component={MovieDetails}></Route>
              <Route path="/logout" component={Logout}></Route>
              <Route path="/" component={LoginForm}></Route>
            </Switch>
          </WrapperHOC>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
