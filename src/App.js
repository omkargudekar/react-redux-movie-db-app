import React, { Component } from 'react';
import LoginFormContainer from './containers/LoginFormContainer/LoginFormContainer'
import SearchContainer from './containers/SearchContainer/SearchContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <LoginFormContainer></LoginFormContainer>
        <SearchContainer > </SearchContainer>
      </React.Fragment>
    );
  }
}

export default App;
