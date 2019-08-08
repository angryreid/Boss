import { CHANGE_INPUT, DEL_ITEM, ADD_ITEM, GET_AREA_LIST, GET_MY_LIST} from './actionTypes';
import axios from "axios";


// 箭头函数返回一个对象使用括号
export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const delItemAction = (value) => ({
  type: DEL_ITEM,
  value
})

export const getListAction = (data) => ({
  type: GET_AREA_LIST,
  data
})

export const getTodoListAction = () => {
  return (dispatch) => {
    axios
      .get(
        "http://mockapi.itanko.com/mock/5d4bcff956a09a453209f55c/react-boss/test"
      )
      .then(res => {
        const data = res.data.data.projects;
        dispatch(getListAction(data));
      })
      .catch(err => {
        throw new Error(err);
      });
  }
}

export const getMyListAction = () => ({
  type: GET_MY_LIST
})