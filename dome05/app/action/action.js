/**
 * Created by xdata on 8/15.
 */
/*
 * action ����
 */
const ADD_TODE = 'ADD_TODE';
const COMPLETED = 'COMPLETED';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// ���tode
function AddTode(value){
    return {
        type:ADD_TODE,
        payload: value
    }
}

// ���ɾ����
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