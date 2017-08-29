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
// �첽���ص� Reducers��Code Splitting ������صģ�
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
    store.replaceReducer(createRootReducer()); // �滻��ǰ�� rootReducer
}*/