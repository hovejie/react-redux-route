/**
 * Created by xdata on 8/16.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import APP from './app/APP';
import store from './app/store/store';
import { Provider } from 'react-redux'
ReactDOM.render(
    <Provider store={store}>
        <APP/>
    </Provider>,
    document.getElementById('APP')
);

