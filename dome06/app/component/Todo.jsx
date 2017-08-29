/**
 * Created by xdata on 8/18.
 */
import React, { Component } from 'react';
export default  class Todo extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return  <li onClick={this.props.Completed}
                    style={{
                  textDecoration: this.props.completed ? 'line-through' : 'none',
                  cursor: this.props.completed ? 'default' : 'pointer'
                }}>{this.props.text}</li>

    }
}