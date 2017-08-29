/**
 * Created by xdata on 8/16.
 */
    import Reducer from './../Reducer/Reducer';
    import {applyMiddleware, createStore } from 'redux';
    import {createLogger} from 'redux-logger';// 打印action
    import thunk from 'redux-thunk';// 改造store.dispatch，使得后者可以接受函数作为参数。

    const middleware = [ thunk ];
    const logger = createLogger();

    middleware.push(logger);

    let store = createStore(Reducer, applyMiddleware(...middleware));

    export default  store;