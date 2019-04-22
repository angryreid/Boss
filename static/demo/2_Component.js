import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props){
  return <p>Hello, {props.name}</p>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="coding-area">
            <Welcome name="derek"></Welcome>
            <Welcome name="emma"></Welcome>
          </div>
          <a  
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello Derek
          </a>
        </header>
      </div>
    );
  }
}

export default App;
