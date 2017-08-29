import React, { Component } from 'react';
import AddTodo from './component/AddTodo.jsx';
import TodoList from './component/TodoList.jsx';
import Footer from './component/Footer.jsx';
import { connect } from 'react-redux';
import {AddTode, completedTode, show} from './action/action';
  class App extends Component{
    render(){
        return (
            <div className='wrap'>
                <AddTodo AddTodo={this.props.AddTode}></AddTodo>
                <TodoList todes={this.props.todes} Completed={this.props.Completed}></TodoList>
                <Footer show={this.props.show} filter={this.props.filter}></Footer>
            </div>
        )
    }
}
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
//����
let mapDispatchToProps = (dispatch)=>{
    return {
        AddTode: (value)=> dispatch(AddTode(value)),
        Completed: (index)=> dispatch(completedTode(index)),
        show: (filter)=> dispatch(show(filter))
    }
};
// ����ui������������
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);