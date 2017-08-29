/**
 * Created by xdata on 8/23.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
export default class Footer extends Component{
    constructor(props){
        super(props);
        this.onchange = this.onchange.bind(this);
    }
    componentWillUpdate(){
        // this.props.show('SHOW_COMPLETED')
    }
    onchange(e){
        let value = e.target.innerHTML;
        this.props.show(value)
    }
    render(){
        let list = [];
        this.props.select.todes.map((date)=>{
            if(!date.completed){
                return;
            }
            list.push(date);
        });
        return <div>
            <AddTodo AddTodos={this.props.AddTode}></AddTodo>
            <TodoList todes={list} Completed={this.props.completedTode}></TodoList>
            show:
            <p style={{color: 'red'}}>
                <Link to="/All" style={{margin: '10px', color: 'blue'}} onClick={this.onchange}>SHOW_ALL</Link>
                SHOW_COMPLETED
                <Link to="/active" style={{margin: '10px', color: 'blue'}} onClick={this.onchange}>SHOW_ACTIVE</Link>
            </p>
        </div>
    }
}