import React, { Component } from "react";
import Xiaojiejie from "./components/Xiaojiejie";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="coding-area">
            <Xiaojiejie />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
