import React, { Component } from "react";
import { Button, List } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";

class App extends Component {
  render() {
    let boss = "derek";
    return (
      <div>
        <div>hello,{boss}</div>
        <One />
      </div>
    );
  }
}

class One extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: ["1", "2", "3", "4"]
    };
  }

  addPeople() {
    this.setState({
      people: [...this.state.people, "5" + Math.random(10)]
    });
  }

  render() {
    return (
      <div>
        <Button type="ghost" onClick={() => this.addPeople()}>
          add
        </Button>
        <List renderHeader={() => "soldier list"} />

        {this.state.people.map(v => {
          return <List.Item key={v}>{v}</List.Item>;
        })}
      </div>
    );
  }
}

export default App;
