/**
 * Created by xdata on 8/18.
 */
import React, { Component } from 'react';
export default  class AddTodo extends Component{
    constructor(props) {
        super(props);
        this.addTode = this.addTode.bind(this);
    }
    addTode() {
        let text = this.refs.text;
        let value = text.value.trim();
        this.props.AddTodo(value);
        text.value = '';
    }
    render(){
        return <div>
                    <input type="text" ref='text' className='input-group'/>
                    <button onClick={this.addTode} className='btn btn-sm'>添加</button>
                </div>
    }
}