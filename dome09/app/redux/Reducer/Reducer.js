/**
 * Created by xdata on 8/17.
 */
import { ACTION_HANDLERS } from '../action/action'
import initState from '../store/instate'
import { combineReducers } from 'redux';

function createReducer(initState, handlers) {
    return function reducer(state = initState, action) {
        const handler = handlers[action.type];
        return handler ? handler(state, action) : state;
    }
}


let selectReducer =  createReducer(initState.reactjs, ACTION_HANDLERS);
const syncReducers = {
    reactjs: selectReducer
};
// ================================
// 异步加载的 Reducers（Code Splitting 按需加载的）
// ================================
const asyncReducers = {};
function createRootReducer() {
    return combineReducers({
        ...syncReducers,
        ...asyncReducers
    });
}
export default createRootReducer;