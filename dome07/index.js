/**
 * Created by xdata on 8/16.
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store/store';
// import APP from './app/APP';
//import active from './app/component/active';
//import All from './app/component/all';
//import completed from './app/component/completed';
import { Router, Route, hashHistory } from 'react-router';
import {AddTode, completedTode, show} from './app/action/action';
// import 'bootstarp';
const  dome = document.getElementById('APP');
import routes from './app/route';
/*
function select(todes, filters){
    switch (filters){
        case 'SHOW_ALL' :
            return todes;
        case 'SHOW_COMPLETED' :
            return todes.filter(todes=> todes.completed);
        case 'SHOW_ACTIVE' :
            return todes.filter(todes=> !todes.completed);
        default : return todes;
    }
}
// ui
let mapStateToProps = (state)=>{
    return {
        todes: select(state.todes, state.show),
        filter: state.show
    }
};
//ÈÝÆ÷
let mapDispatchToProps = (dispatch)=>{
    return {
        AddTode: (value)=> dispatch(AddTode(value)),
        Completed: (index)=> dispatch(completedTode(index)),
        show: (filter)=> dispatch(show(filter))
    }
};
const connectComponent = createContainer(
    mapStateToProps, // mapStateToProps
    mapDispatchToProps          // mapActionCreators
);

*/
render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}>
        </Router>
    </Provider>,
    dome
);