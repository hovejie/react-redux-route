/**
 * Created by xdata on 8/16.
 */
import React,{Component} from 'react';
import {render} from 'react-dom'
import { Provider } from 'react-redux';
import APP from './app/APP';
import configureStore from './app/router/store';

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);
render(
    <Provider store={store}>
        <APP/>
    </Provider>,
    document.getElementById('APP')
);

