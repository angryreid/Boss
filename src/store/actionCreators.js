import { CHANGE_INPUT, DEL_ITEM, ADD_ITEM} from './actionTypes';


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