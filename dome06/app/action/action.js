/**
 * Created by xdata on 8/15.
 */
/*
 * action ÀàÐÍ
 * const ADD_TODE = 'ADD_TODE';
 const COMPLETED = 'COMPLETED';
 const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
 */
// import fetch from 'isomorphic-fetch';


const START = 'START';
const END = 'END';
const SELECT = 'SELECT';
const REFRESH = 'REFRESH';

function start(reddit){
    return {
        type: START,
        reddit
    }
}
function end(reddit, json){
    return {
        type: END,
        time: Date.now(),
        posts: json.data.children.map(child => child.data),
        reddit
    }
}
function select(reddit){
    return {
        type: SELECT,
        reddit
    }
}
function refresh(reddit){
    return {
        type: REFRESH,
        reddit
    }
}
const fetchPosts = reddit => dispatch => {
    dispatch(refresh(reddit))
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(end(reddit, json)))
}
/*const shouldFetchPosts = (state, reddit) => {
    const posts = state.postsByReddit[reddit]
    if (!posts) {
        return true
    }
    if (posts.isFetching) {
        return false
    }
    return posts.didInvalidate
}
*/
const fetchPostsIfNeeded = reddit => (dispatch, getState) => {

        return dispatch(fetchPosts(reddit))

}
export {start,end, select, refresh, fetchPostsIfNeeded}