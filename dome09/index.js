/**
 * Created by xdata on 8/16.
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import {Router , hashHistory } from 'react-router'
import routes from './app/route';

const  dome = document.getElementById('APP');

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    dome
);