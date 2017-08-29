/**
 * Created by xdata on 8/17.
 */
import { combineReducers } from 'redux';
function show(state = 'SHOW_ALL', action){
    switch (action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.payload;
        default : return state;
    }
}
function todes(state = [], action){
    switch (action.type){
        case 'ADD_TODE':
            return [
                ...state,
                {
                    text: action.payload,
                    completed: false
                }
            ];
        case 'COMPLETED':
            // �������ݲ�ѯindexλ��
            let index = 0;
            state.map((date, i)=>{
                if(date.text == action.payload){
                    index = i;
                }
            });
            // �����޸ĺ��state
            return [
                ...state.slice(0, index),
                Object.assign({}, state[index] ,{
                    completed: true
                }),
                ...state.slice(index+1)
            ];
        default : return state;
    }
}
/*
* combineReducers������
* function combineReducers������(){
*       return {
*           show: show(),
*           todes: todes()
*       }
* }
* */
const todeApp = combineReducers({
    show,
    todes
});

export default todeApp;