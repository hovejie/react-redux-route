/**
 * Created by xdata on 8/15.
 */
import store from './store';
/*let next  = store.dispatch;
//����м��
store.dispatch = (action)=>{
    console.log('state',store.getState());
    console.log('dispatching',action);
    next(action);
    console.log('next state',store.getState());
};*/
function onIncrement(){
    store.dispatch({
        type: 'INCREMENT'
    })
}
function onDecrement() {
    store.dispatch({
        type: 'DECREMENT'
    })
}
export default {onIncrement, onDecrement}