import React, { Component } from "react";
import TodoListUI from "./TodoListUI";

import store from "../store";
import {
  changeInputAction,
  addItemAction,
  delItemAction
} from "../store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    this.storeChange = this.storeChange.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
    this.addItem = this.addItem.bind(this);
    // this.delItem = this.delItem.bind(this);// 这一步绑定失败，要到子组件当中使用bind, 可以使用箭头函数重新返回一个函数
    this.delItem = this.delItem.bind(this);


    store.subscribe(this.storeChange); // 订阅
  }
  storeChange() {
    this.setState(store.getState());
  }

  changeInputValue(e) {
    store.dispatch(changeInputAction(e.target.value));
  }

  addItem() {
    store.dispatch(addItemAction());
  }

  delItem(index) {
    store.dispatch(delItemAction(index));
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        addItem={this.addItem}
        delItem={this.delItem}
      />
    );
  }
}

export default TodoList;
