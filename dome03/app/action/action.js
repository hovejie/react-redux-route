/**
 * Created by xdata on 8/15.
 */
/*import store from './action.js';
let next  = store.dispatch;
//����м��
store.dispatch = (action)=>{
    console.log('state',store.getState());
    console.log('dispatching',action);
    next(action);
    console.log('next state',store.getState());
};*/
function onIncrement(){
   return{
        type: 'INCREMENT',
        play: 10
    }
}
function onDecrement() {
   return{
        type: 'DECREMENT',
        play: 20
    }
}
export default {onIncrement, onDecrement}