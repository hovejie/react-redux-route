/**
 * Created by xdata on 8/16.
 */
    import Reducer from './../Reducer/Reducer';
    import {applyMiddleware, createStore } from 'redux';
    import {createLogger} from 'redux-logger';
    const state = {
            AddTode: [],

    };
    const logger = createLogger();
    let store = createStore(Reducer, applyMiddleware(logger));
    export default  store;