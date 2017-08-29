/**
 * Created by xdata on 8/16.
 */
import {applyMiddleware, createStore } from 'redux';
import reducer from '../Reducer/Reducer';
import {createLogger} from 'redux-logger';
const logger = createLogger();
/*
export default function createReducer(initState, handlers) {
    return function reducer(state = initState, action) {
        const handler = handlers[action.type];
        return handler ? handler(state, action) : state;
    }
}*/
const store = createStore(reducer, applyMiddleware(logger));
// const store = createStore(reducer);
export default  store;