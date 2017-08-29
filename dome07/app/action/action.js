/**
 * Created by xdata on 8/15.
 */
/*
 * action 类型
 */
const ADD_TODE = 'ADD_TODE';
const COMPLETED = 'COMPLETED';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// 添加tode
function AddTode(value){
    return {
        type:ADD_TODE,
        payload: {
            text: value,
            completed: false
        }
    }
}

// 添加删除线
function completedTode(index){
    return {
        type:COMPLETED,
        payload: index
    }
}

function show(filter){
    return {
        type: SET_VISIBILITY_FILTER,
        payload: filter
    }
}
export default {AddTode,completedTode, show}

export const ACTION_HANDLERS = {
    [ADD_TODE]: (select, {payload})=>Object.assign({}, select, {todes: payload}),
    [COMPLETED]: (select, {payload})=>Object.assign({}, select, {todes: payload}),
    [SET_VISIBILITY_FILTER]: (select, {payload})=>Object.assign({}, select, {todes: payload})
}

/*function show(state = 'SHOW_ALL', action){
 switch (action.type){
 case 'SET_VISIBILITY_FILTER':
 return action.payload;
 default : return state;
 }
 }


import { combineReducers } from 'redux';
function todes(state = [], action){
    switch (action.type){
        case 'SHOW_ALL' :
            return state;
        case 'SHOW_COMPLETED' :
            return state;
        case 'SHOW_ACTIVE' :
            return state;
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

  combineReducers类似于
  function combineReducers类似于(){
        return {
            show: show(),
            todes: todes()
        }
  }

const todeApp = combineReducers({
    todes
});
export default todeApp;*/