import React, { Component } from 'react';
import LoginFormContainer from './containers/LoginFormContainer/LoginFormContainer'
import SearchContainer from './containers/SearchContainer/SearchContainer'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Movie from './components/Movie/Movie'
import {Route, BrowserRouter} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavigationBar></NavigationBar>
          <Route path="/login" component={LoginFormContainer}></Route>
          <Route path="/search" component={SearchContainer}></Route>
          <Route path="/movie/:id" component={Movie}></Route>
          <Route path="/logout" render={()=>{return <div>You Logged out</div> }}></Route>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
