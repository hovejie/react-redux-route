/**
 * Created by xdata on 8/16.
 */
    import {createRootReducer} from './../Reducer/Reducer';
    import {applyMiddleware, createStore } from 'redux';
    import {createLogger} from 'redux-logger';
    import thunk from 'redux-thunk';
    // import syncHistoryWithStore from './syncHistoryWithStore';
    const logger = createLogger();
    let store = createStore(createRootReducer(), applyMiddleware(thunk, logger));
    export default  store;
    // export const history = syncHistoryWithStore(store);