/**
 * Created by xdata on 8/18.
 */
import React, { Component } from 'react';
import Todo from './Todo.jsx';

export default  class TodoList extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        let list  = this.props.todes.map((tode, index)=>{
                return <Todo {...tode} key={index} Completed={()=> this.props.Completed(tode.text)}></Todo>

        });
        return  (
            <ul>
                {list}
            </ul>
        )

    }
}