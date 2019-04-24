import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// 列表 & Keys


const numbers = [1,2,3,4,5];
const items = numbers.map(v => <h1>{v}</h1>)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="coding-area">
            {/* start */}
            {items}
            {/* end */}
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
