import React, { Component } from "react";

import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
import "./TodoList.css";
class TodoListUI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <Input
            placeholder={
              this.props.inputValue ? this.props.inputValue : "input..."
            }
            className="antd-width"
            onChange={this.props.changeInputValue}
            value={this.props.inputValue}
          />
          <Button type="primary" onClick={this.props.addItem}>
            增加
          </Button>
        </div>
        <div>
          <List
            className="antd-list"
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item onClick={() => {
                return this.props.delItem(index)
              }}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default TodoListUI;
