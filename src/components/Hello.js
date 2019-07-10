import React, { Component } from "react";
import Input from "./Input";

import utils from "../assets/lib/utils";

/**
 * @params props
 *
 */
function Inputing(props) {
  const show_set_area = props.show_set_area;
  if (show_set_area) {
    return <Input />;
  } else {
    return <div style={{padding:'10px 0'}}>你是真的很不错！</div>;
  }
}

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_set_area: true,
      is_clickable: true,
      start_name: "今天打卡时间：",
      start_time: "00:00:00",
      home_name: "今天下班时间：",
      home_time: "00:00:00",
      count_name: "倒计时",
      remain: "00:00:00",
      tip: "划水中...",
      start_tip: "⛽️工作加油哦^_^",
      home_tip: "辛苦💦了一天，好好休息吧♨️",
      remain_time: 0,
      interval: null
    };
    this.go = this.go.bind(this);
    this.reset = this.reset.bind(this);
    this.handleSetTime = this.handleSetTime.bind(this);
    this.countDown = this.countDown.bind(this);
    this.clearCountDown = this.clearCountDown.bind(this);
  }
  componentWillMount() {
    let today = utils.getDate(new Date().getTime(), "month");
    if (!!localStorage.getItem(today)) {
      let todayObj = JSON.parse(localStorage.getItem(today));
      this.setState({
        is_clickable: false,
        start_time: todayObj.start_time,
        home_time: todayObj.home_time,
        remain_time:
          new Date(todayObj.home_time).getTime() - new Date().getTime()
      });
      this.countDown();
    }
  }

  go() {
    if (!this.state.is_clickable) {
      return;
    }
    const start_time = utils.getDate(new Date().getTime(), "year");
    const home_time = utils.getDate(
      new Date().getTime() + 8.5 * 60 * 60 * 1000,
      "year"
    );
    const remian_time =
      new Date().getTime() + 8.5 * 60 * 60 * 1000 - new Date().getTime();
    this.setState({
      is_clickable: false,
      start_time: start_time,
      home_time: home_time,
      remain_time: remian_time
    });
    this.countDown();
    localStorage.setItem(
      utils.getDate(new Date().getTime(), "month"),
      JSON.stringify({
        start_time: start_time,
        home_time: home_time
      })
    );
  }
  reset() {
    this.setState({
      is_clickable: true
    });
    this.setState({
      start_time: "00:00:00",
      home_time: "00:00:00",
      remain: "00:00:00"
    });
    this.clearCountDown();
    localStorage.setItem(
      utils.getDate(new Date().getTime(), "month"),
      ""
    );
  }
  countDown() {
    this.clearCountDown();
    this.setState({
      interval: window.setInterval(() => {
        if (this.state.remain_time <= 0) {
          this.setState({
            tip: this.state.home_tip
          });
          localStorage.setItem(
            utils.getDate(new Date().getTime(), "month"),
            ""
          );
        } else {
          this.setState({
            tip: this.state.start_tip,
            remain_time: this.state.remain_time - 1000,
            remain: utils.getRemain(this.state.remain_time - 1000)
          });
        }
      }, 1000)
    });
  }
  clearCountDown(cb) {
    if (this.state.interval) {
      window.clearInterval(this.state.interval);
      cb && cb();
    }
  }
  handleSetTime() {
    this.setState({
      show_set_area: !this.state.show_set_area
    });
  }

  render() {
    return (
      <div>
        <Inputing show_set_area={this.state.show_set_area} />
        <fieldset>
          <legend>好好学习，天天向上</legend>
          <div>
            <div>
              <span>{this.state.start_name}</span>
              <div>{this.state.start_time}</div>
              <hr className="work-time-hr" />
              <span>{this.state.home_name}</span>
              <div>{this.state.home_time}</div>
              <hr className="work-time-hr" />
              <span>{this.state.count_name}</span>
              <div>{this.state.remain}</div>
              <div>{this.state.tip}</div>
            </div>
            <div className="work-time-btn-box">
              <div
                onClick={this.go}
                className={`work-time-btn ${
                  this.state.is_clickable ? "active" : ""
                }`}
              >
                GO
              </div>
              <div onClick={this.reset} className="work-time-btn active">
                Reset
              </div>
            </div>
          </div>
        </fieldset>
        <svg
          width={80}
          height={80}
          onClick={this.handleSetTime}
          viewBox="0 0 250 250"
          style={{
            fill: "#151513",
            color: "#fff",
            position: "absolute",
            top: 0,
            border: 0,
            right: 0
          }}
          aria-hidden="true"
        >
          <path d="M0 0 115 115 130 115 142 142 250 250 250 0Z" />
          <path
            d="M128.3 109C113.8 99.7 119 89.6 119 89.6 122 82.7 120.5 78.6 120.5 78.6 119.2 72 123.4 76.3 123.4 76.3 127.3 80.9 125.5 87.3 125.5 87.3 122.9 97.6 130.6 101.9 134.4 103.2"
            fill="currentColor"
            style={{ transformOrigin: "130px 106px" }}
          />
          <path
            d="M115 115C114.9 115.1 118.7 116.5 119.8 115.4L133.7 101.6C136.9 99.2 139.9 98.4 142.2 98.6 133.8 88 127.5 74.4 143.8 58 148.5 53.4 154 51.2 159.7 51 160.3 49.4 163.2 43.6 171.4 40.1 171.4 40.1 176.1 42.5 178.8 56.2 183.1 58.6 187.2 61.8 190.9 65.4 194.5 69 197.7 73.2 200.1 77.6 213.8 80.2 216.3 84.9 216.3 84.9 212.7 93.1 206.9 96 205.4 96.6 205.1 102.4 203 107.8 198.3 112.5 181.9 128.9 168.3 122.5 157.7 114.1 157.9 116.9 156.7 120.9 152.7 124.9L141 136.5C139.8 137.7 141.6 141.9 141.8 141.8Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  }
}

export default Hello;
