import { takeEvery, put } from "redux-saga/effects";
import { GET_MY_LIST } from "./actionTypes";
import { getListAction } from "./actionCreators";
import axios from "axios";

function* getList() {
  const res = yield axios.get(
    "http://mockapi.itanko.com/mock/5d4bcff956a09a453209f55c/react-boss/test"
  );
  const data = res.data.data.projects;
  yield put(getListAction(data));
}

export default function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList);
}
