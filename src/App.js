import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Hello from "./components/Hello"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="coding-area">
            {/* start */}
            <Hello></Hello>
            {/* end */}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
