/**
 * Created by xdata on 8/16.
 */
    import Reducer from './../Reducer/Reducer';
    import {applyMiddleware, createStore } from 'redux';
    import {createLogger} from 'redux-logger';// ��ӡaction
    import thunk from 'redux-thunk';// ����store.dispatch��ʹ�ú��߿��Խ��ܺ�����Ϊ������

    const middleware = [ thunk ];
    const logger = createLogger();

    middleware.push(logger);

    let store = createStore(Reducer, applyMiddleware(...middleware));

    export default  store;