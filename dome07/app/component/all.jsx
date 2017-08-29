/**
 * Created by xdata on 8/23.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
export default class All extends Component{
    constructor(props){
        super(props)
        this.onchange = this.onchange.bind(this);
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    onchange(e){
        let value = e.target.innerHTML;
        this.props.show(value);
    }
    render(){
        console.log(this.props);
        debugger;
        return <div>
            <AddTodo AddTodos={this.props.AddTode}></AddTodo>
            <TodoList todes={this.props.select.todes} Completed={this.props.completedTode}></TodoList>
            show:
            <p style={{color: 'red'}}>
                SHOW_ALL
                <Link to="/completed" style={{margin: '10px', color: 'blue'}} onClick={this.onchange}>SHOW_COMPLETED</Link>
                <Link to="/active" style={{margin: '10px', color: 'blue'}} onClick={this.onchange}>SHOW_ACTIVE</Link>
            </p>
        </div>
    }
}