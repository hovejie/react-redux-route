/**
 * Created by xdata on 8/15.
 */
import store from './store';
/*let next  = store.dispatch;
//添加中间件
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