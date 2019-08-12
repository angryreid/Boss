import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, title: "技术胖的个人博客-1" },
        { id: 2, title: "技术胖的个人博客-2" },
        { id: 3, title: "技术胖的个人博客-3" }
      ]
    };
    // 编程 重定向
    this.props.history.push("/home/");
  }
  render() {
    return (
      <div>
        {/* 标签 重定向 */}
        {/* <Redirect to="/home/" /> */}
        <h2>jspang.com</h2>
        <ul>
          {this.state.list.map(v => {
            return (
              <li key={v.id}>
                <Link to={"/list/" + v.id}>{v.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Index;
