import React, { Component } from 'react';
import LoginFormContainer from './containers/LoginFormContainer/LoginFormContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginFormContainer></LoginFormContainer>
      </div>
    );
  }
}

export default App;
