import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

/**
 * decorator 装饰器
 * 当前案例无法运行，提示无法使用装饰器，
 * 具体描述 https://github.com/facebook/create-react-app/issues/5708
 */

const args = {
  f1() {
    console.log("f1");
  },
  f2() {
    console.log("f2");
  },
  f3() {
    console.log("f3");
  }
};

// 定义装饰器的外层函数
function mixin(...args) {
  // 返回一个装饰器函数
  return function(target) {
    Object.assign(target.proptype, ...args);
  };
}

// 使用mixins装饰器
@mixin(args)
class Animal {}

class App extends Component {
  render() {
    let cat = new Animal();
    cat.f1();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="coding-area">
            {/* start */}

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
