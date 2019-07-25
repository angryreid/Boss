import React, { Component } from "react";
import { Button } from 'antd-mobile'

import 'antd-mobile/dist/antd-mobile.css'

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
      people: ["he", "she", "him", "her"]
    };
  }




  addPeople(){
    this.setState({
      people: [...this.state.people,'ooooo' + Math.random(10)]
    })
  }

  render() {
    return (
      <div>
        <Button type="ghost" onClick={() => this.addPeople()}>add</Button>
        <ul>
          {this.state.people.map(v => {
            return <li key={v}>{v}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
