import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// 列表 & Keys

function NumberList(props) {
  const numbers = props.numbers;
  const items = numbers.map(v => <li key={v}>{v}</li>);
  return <ul>{items}</ul>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="coding-area">
            {/* start */}
            <NumberList numbers={[1, 2, 3, 4]} />
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
