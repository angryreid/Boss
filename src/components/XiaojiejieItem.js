import React, { Component } from "react";
import PropTypes from "prop-types";

class XiaojiejieItem extends Component {
  handelClick() {
    this.props.deleteItem(this.props.index);
  }

  componentWillUnmount() {
    console.log(1);
  }
  shouldComponentUpdate(nextProps, nextState){
    // 解决子组件的渲染性能问题，写一个todolist，能写出来，算是普通程序员，能写出来并作性能优化的，算是有经验的程序员
    if(nextProps.content !== this.props.content){
      return true;
    }else{
      return false;
    }
  }
  render() {
    console.log('child-render')
    return (
      <li onClick={this.handelClick.bind(this)}>
        {this.props.avname} 为你做-->{this.props.content}
      </li>
    );
  }
}
// 使用 propTypes 限制类型

XiaojiejieItem.protoTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
};

// 使用defaultProps 设置默认数据
// XiaojiejieItem.defaultProps = {}

// 设置必填数据
// XiaojiejieItem.protoTypes = { avname: PropTypes.string.isRequired}

export default XiaojiejieItem;

/**
 * 父组件向子组件传递内容，靠属性的形式传递
 */

/**
 * 函数式编程：
 * 优点：
 * 1. 函数式编程让我们的代码变得更加的清晰，每个功能都是一个函数。
 * 2. 函数式编程为我们的代码测试代理了极大地方便，更容易实现前端自动化测试。
 */

/**
 * React Dev Tools
 * - 灰色：不可以使用，说明页面不是React编写的。
 * - 黑色：说明页面是使用React编写的，并且处于生产环境中。
 * - 红色：说明页面是使用React来编写的，并且处于开发环境中。
 */
