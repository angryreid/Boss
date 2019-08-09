import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import store from "./store";

/**
 * 使用react-redux的流程
 * 1. 在入口文件 index.js 中引用Provider，内部的组件共享
 * 2. 在使用store的组件中使用connect连接器
 * 3. 设置映射，传送命令，类似于一个翻译。
 */

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));
