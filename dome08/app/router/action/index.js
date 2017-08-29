/**
 * Created by xdata on 8/15.
 */
/*import store from './action.js';
let next  = store.dispatch;
//添加中间件
store.dispatch = (action)=>{
    console.log('state',store.getState());
    console.log('dispatching',action);
    next(action);
    console.log('next state',store.getState());
};*/
function onIncrement(){
   return{
        type: 'INCREMENT'
    }
}
function onDecrement() {
   return{
        type: 'DECREMENT'
    }
}
export  {onIncrement, onDecrement}