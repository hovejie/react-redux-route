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
        payload: value
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
export {AddTode,completedTode, show}