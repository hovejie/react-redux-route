/**
 * Created by xdata on 8/16.
 */
import {applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import reducer from '../Reducer';
import {createLogger} from 'redux-logger';

const logger = createLogger();

// ʹ�ó�ʼ state ���� Redux store
const configureStore =(preloadedState)=>{
    const store = createStore(
        reducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    );
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../Reducer', () => {
            const nextRootReducer = require('../Reducer').default
            store.replaceReducer(nextRootReducer)
        })
    }
    return store;
};

// const store = createStore(reducer);
export default  configureStore;