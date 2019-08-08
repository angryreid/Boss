import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM} from './actionTypes';


const defaultState = {
  inputValue: "",
  list: ["item-1", "item-2", "item-3"]
};


export default (state = defaultState, action) => {
  // 要求返回的必须是一个纯函数，即返回结果只与传入结果相关，没有其他外部干涉
  // Reducer 只能接收state, 不能改变state
  console.log(action);
  if(action.type === CHANGE_INPUT){
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if(action.type === ADD_ITEM){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  if(action.type === DEL_ITEM){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.value, 1);
    return newState;
  }


  return state;
};
