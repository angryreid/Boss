import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user){
  if(user){
    return user.firstName +' '+ user.lastName;
  }else{
    return 'stranger'
  }
}

function getGreeting(user){
  if(user){
    return <p>Hello,{formatName(user)}</p>
  }else{
    return <p>Stranger!</p>
  }
}

const user = {
  firstName: 'foo',
  lastName: 'bar'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{formatName(derek)}</p>
          <p>{formatName()}</p>
          {getGreeting(derek)}
          {getGreeting()}
          <a  
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello World
          </a>
        </header>
      </div>
    );
  }
}

export default App;
