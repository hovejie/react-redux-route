/**
 * Created by xdata on 8/16.
 */
import todoApp from './../Reducer/Reducer';
import {applyMiddleware, createStore } from 'redux';
import {createLogger} from 'redux-logger';

const logger = createLogger();
let store = createStore(todoApp, applyMiddleware(logger));
export default  store;