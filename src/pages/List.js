import React, { Component } from "react";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }
  componentDidMount() {
    let tempId = this.props.match.params.id;
    this.setState({
      id: tempId
    });
  }
  render() {
    return <h2>list-{this.state.id}</h2>;
  }
}

export default List;
