/**
 * Created by xdata on 8/17.
 */
    let state1 = {
        calc: {
            state: 0
        }
    };
const reducer = (state = state1, action) => {
    switch (action.type) {
        case 'INCREMENT': return Object.assign({}, state, {state: action.play});
        case 'DECREMENT': return Object.assign({}, state, {state: action.play});
        default: return state.calc;
    }
};
export default reducer;