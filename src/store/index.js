import { createStore, applyMiddleware, compose } from "redux";
// thunk
// import thunk from "redux-thunk";

// saga
import createSagaMiddleware from 'redux-saga';
import mySagas from './sagas'

import reducer from "./reducer";


// 增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

// thunk
// const enhancer = composeEnhancers(applyMiddleware(thunk));

// saga
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));


const store = createStore(reducer, enhancer);
// 只接受两个参数
// 关于redux dev插件的引入使用增强函数

// saga
// 使用必须在createStore之后
sagaMiddleware.run(mySagas)


export default store;
