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
// �첽���ص� Reducers��Code Splitting ������صģ�
// ================================
const asyncReducers = {};
function createRootReducer() {
    return combineReducers({
        ...syncReducers,
        ...asyncReducers
    });
}
export default createRootReducer;