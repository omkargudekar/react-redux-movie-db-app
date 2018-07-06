import React, { Component } from 'react';
import LoginForm from './components/LoginForm/LoginForm'
import MovieSearchBox from './components/MovieSearchBox/MovieSearchBox'
import NavigationBar from './components/NavigationBar/NavigationBar'
import MovieDetails from './components/MovieDetails/MovieDetails'
import {Route, BrowserRouter,Switch,Redirect} from 'react-router-dom'
import WrapperHOC from './hoc/WrapperHOC/WrapperHOC'
import Logout from './components/Logout/Logout'
import {connect} from 'react-redux'
import './App.css';


class App extends Component {
  render() {
    let authenticatedRoutes = (
      <Switch>
        <Route path="/search" component={MovieSearchBox}></Route>
        <Route path="/movie/:id" component={MovieDetails}></Route>
        <Route path="/logout" component={Logout}></Route>
        <Redirect to="/search" />
      </Switch>
    );

    let unauthenticatedRoutes=(
      <Switch>
        <Route path="/login" component={LoginForm}></Route>
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
