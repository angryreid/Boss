import { INPUT_CHANGE, ADD_ITEM } from "./actionTypes";

const defaultState = {
  value: "jspang",
  list: [{ id: 1, value: 1 }, { id: 2, value: 2 }, { id: 3, value: 3 }]
};

export default (state = defaultState, action) => {
  if (action.type === INPUT_CHANGE) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.value = action.value;
    return newState;
  }

  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push({ id: newState.list.length + 1, value: newState.value });
    newState.value = "";
    return newState;
  }

  return state;
};
