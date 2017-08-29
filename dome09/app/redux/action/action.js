/**
 * Created by xdata on 8/15.
 */
/*
 * action ÀàÐÍ
 */
// import fetch from 'isomorphic-fetch';

import Server from '../../server';

const REACT = 'REACT';
const SYNC = 'SYNC';
function getContent(reddit){
    return async function (dispatch){
        let date = await Server.getContent(reddit);
        dispatch({
            type: REACT,
            payload: {
                content: date,
                didInvalidate: true,
                time: Date.now()
            }
        })
    }

}
function sync(reddit){
    return async function (dispatch){
        let date = await Server.getContent(reddit);
        dispatch({
            type: REACT,
            payload: {
                content: date,
                didInvalidate: true,
                time: Date.now()
            }
        })
    }
}

export default {getContent, sync};

export const ACTION_HANDLERS = {
    [REACT]: (reactjs, {payload})=> Object.assign({}, reactjs, {
        content: payload.content,
        didInvalidate: payload.didInvalidate,
        time: payload.time
    }),
    [SYNC]: (reactjs, {payload})=> Object.assign({}, reactjs, {
        content: payload.content,
        didInvalidate: payload.didInvalidate,
        time: payload.time
    })
};

