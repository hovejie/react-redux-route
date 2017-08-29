/**
 * Created by xdata on 8/16.
 */
import {applyMiddleware, createStore } from 'redux';
import {createLogger} from 'redux-logger';
const logger = createLogger();



const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
};
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