import React, { Component } from 'react';
import AddTodo from './component/AddTodo.jsx';
import TodoList from './component/TodoList.jsx';
// import All from './component/all';
// import { connect } from 'react-redux';
 //import {AddTode, completedTode, show} from './action/action';

  class App extends Component{
    render(){
        console.log(this.props);
        debugger;
        return (
            <div className='wrap'>
                {this.props.children}
            </div>
        )
    }
}
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
//容器
let mapDispatchToProps = (dispatch)=>{
    return {
        AddTode: (value)=> dispatch(AddTode(value)),
        Completed: (index)=> dispatch(completedTode(index)),
        show: (filter)=> dispatch(show(filter))
    }
};*/
// 连接ui组件与容器组件
export default App;
/*
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);*/