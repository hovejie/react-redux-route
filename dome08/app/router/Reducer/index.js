/**
 * Created by xdata on 8/17.
 */
import { combineReducers } from 'redux';
const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
};

const todeApp = combineReducers({
    reducer
});
export default todeApp;