/**
 * Created by xdata on 8/16.
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store/store';
import APP from './app/APP';
// import 'bootstarp';
const  dome = document.getElementById('APP');
render(
    <Provider store={store}>
        <APP/>
    </Provider>,
    dome
);