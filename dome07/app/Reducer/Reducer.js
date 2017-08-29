/**
 * Created by xdata on 8/17.
 */
import { ACTION_HANDLERS } from '../action/action'
import initState from '../store/instate'
import { combineReducers } from 'redux';
// import store from '../store/store';
function createReducer(initState, handlers) {
    return function reducer(state = initState, action) {
        const handler = handlers[action.type];
        return handler ? handler(state, action) : state;
    }
}


let selectReducer =  createReducer(initState.select, ACTION_HANDLERS);
const syncReducers = {
        select: selectReducer
};
// ================================
// 异步加载的 Reducers（Code Splitting 按需加载的）
// ================================
const asyncReducers = {};

export function createRootReducer() {
    return combineReducers({
        ...syncReducers,
        ...asyncReducers
    });
}

/*export function injectReducer(key, reducer) {
    asyncReducers[key] = reducer;
    store.replaceReducer(createRootReducer()); // 替换当前的 rootReducer
}*/