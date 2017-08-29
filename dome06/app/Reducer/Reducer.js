/**
 * Created by xdata on 8/17.
 */
import { combineReducers } from 'redux';
function show(state = 'reactjs', action){
    switch (action.type){
        case 'SELECT':
            return action.reddit;
        default : return state;
    }
}
function todes(state = {
    isFetching: false,// 显示进度条
    didInvalidate: false,//标记数据是否过期
    items: []// 内容
}, action){
    switch (action.type) {
        case 'START' :
        return {
            ...state,
            isFetching: true,
            didInvalidate: false
        };
        case 'END' :
            return {
                ...state,
                isFetching: true,
                didInvalidate: false,
                items: action.posts,
                time: action.time
            };
        case 'REFRESH' :
            return {
                ...state,
                didInvalidate: true
            };
        default : return state;
    }
}
/*
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
            // 根据内容查询index位置
            let index = 0;
            state.map((date, i)=>{
                if(date.text == action.payload){
                    index = i;
                }
            });
            // 返回修改后的state
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

* combineReducers类似于
* function combineReducers类似于(){
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