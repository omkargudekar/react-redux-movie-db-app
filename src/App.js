import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar'
import {Route, BrowserRouter,Switch,Redirect} from 'react-router-dom'
import WrapperHOC from './hoc/WrapperHOC/WrapperHOC'
import Logout from './components/Logout/Logout'
import {connect} from 'react-redux'
import AsyncComponent from './hoc/AsyncComponent'
import './App.css';

const AsyncMovieSearchBox = AsyncComponent(()=>{return import('./components/MovieSearchBox/MovieSearchBox')});
const AsyncMovieDetails = AsyncComponent(() => { return import('./components/MovieDetails/MovieDetails') });
const AsyncLogin = AsyncComponent(() => {return import('./components/LoginForm/LoginForm') });


class App extends Component {
  render() {
    let authenticatedRoutes = (
      <Switch>
        <Route path="/search" component={AsyncMovieSearchBox}></Route>
        <Route path="/movie/:id" component={AsyncMovieDetails}></Route>
        <Route path="/logout" component={Logout}></Route>
        <Redirect to="/search" />
      </Switch>
    );

    let unauthenticatedRoutes=(
      <Switch>
        <Route path="/login" component={AsyncLogin}></Route>
        <Redirect to="/login" />
      </Switch>   
    );

    return (
        <BrowserRouter>
          <WrapperHOC>
           <NavigationBar></NavigationBar>
            {(this.props.isLoggedIn) ? authenticatedRoutes : unauthenticatedRoutes}
          </WrapperHOC>
        </BrowserRouter>
    );
  }
}


const mapStateToProps=(state)=>{
  return{
    isLoggedIn: state.loginReducerSlice.loggedIn
  }
}

export default connect(mapStateToProps)(App);
