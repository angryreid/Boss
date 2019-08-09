import React from "react";
import { inputChangeAction, addItemAction } from '../store/actionCreators';
import { connect } from "react-redux";


// 无状态组件，UI组件。
const TodoList = props => {
  return (
    <div
      style={{ width: "50vw", margin: "0 auto", border: "1px solid skyblue" }}
    >
      <div>
        <input
          type="text"
          value={props.inputValue}
          onChange={props.inputChange}
        />
        <button onClick={props.addItem}>提交</button>
      </div>
      <ul>
        {props.list.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

const stateToProps = state => {
  return {
    inputValue: state.value,
    list: state.list
  };
};

const dispatchToProps = dispatch => {
  return {
    inputChange(e) {
      dispatch(inputChangeAction(e.target.value))
    },

    addItem(){
      dispatch(addItemAction());
    }
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(TodoList);
