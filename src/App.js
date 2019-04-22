import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), title: "This is Clock" };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <button onClick={this.changeTitle.bind(this)} type="button">
          click
        </button>
      </div>
    );
  }

  changeTitle() {
    this.setState({
      title: "change title"
    });
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="coding-area">
            {/* start */}
            <Clock />
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
