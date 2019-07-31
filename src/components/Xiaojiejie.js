import React, { Component, Fragment } from "react";
import XiaojiejieItem from "./XiaojiejieItem";
import Boss from './Boss';
import axios from 'axios';

import "./style.css";

class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "0",
      list: ["头部按摩", "精油推背"]
    };
  }

  inputChange() {
    this.setState({
      inputValue: this.input.value
    });
  }

  addList() {
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: ""
      },
      () => {
        console.log(this.ul.querySelectorAll("li").length);
      }
    );
  }

  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }

  componentDidMount(){
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
    .then((res) => {
      console.log('axios success:',JSON.stringify(res));
    })
    .catch((error) => {
      console.log('axios error:',error);
    })
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="jspang">加入服务</label>
          <input
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={ (input) => {this.input = input}}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul
          ref={ul => {
            this.ul = ul;
          }}
        >
          {this.state.list.map((v, i) => {
            return (
              <XiaojiejieItem
                content={v}
                index={i}
                key={i}
                avname={'小姐姐'}
                deleteItem={this.deleteItem.bind(this)}
              />
            );
          })}
        </ul>
        <Boss></Boss>
      </Fragment>
    );
  }
}

export default Xiaojiejie;

/**
 * 讲解部分：
 *
 * react 要求必须在组件的最外层进行包裹
 * 如果说布局偏偏不要这个最外层的标签，可以使用react提供的Fragment标签
 * React 是禁止直接操作state的
 */

// 生命周期
// 生命周期函数是指在某一个时刻组件会自动执行的函数
/**
 * Initialization 阶段
 * constructor 不算是生命周期函数
 * 在心里可以把它当作一个生命周期函数，处于initialization 阶段
 */

/**
 * Mounting 阶段
 * componentWillMount
 * render
 * componentDidMount
 * 注意：
 * componentWillMount,componentDidMount 函数只在页面刷新时执行一次，而render函数只要有state和prps变化就会执行。
 */

 /**
  * Updation 阶段
  * shouldComponetUpdate
  * 函数会在组件更新之前，自动被执行。要求返回一个布尔类型的结果，必须要有返回值，（真实开发中，这个有大作用？保持疑问...）
  * 
  * componentWillUpdate函数
  * 在  组件更新之前执行，但在shouldComponetUpdate之后执行，但是如果shouldComponentUpdate返回false,这个函数就不会执行。
  * 
  * componentDidUpdate
  * 在组件更新之后执行，它是组件更新的最后一个环节
  * 
  * 
  * 1-shouldComponentUpdate---
  * 2-componetWillUpdate---
  * 3-render--
  * 4-componentDidUpate--
  * 
  * componentWillReciverProps
  * 子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行
  */

  /**
   * Unmount 阶段
   * componentWillUnmout
   * 组件从页面中删除的时候执行
   */