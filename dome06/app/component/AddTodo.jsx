/**
 * Created by xdata on 8/18.
 */
import React, { Component } from 'react';
export default  class AddTodo extends Component{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange() {
        let value = this.refs.select.value;
        this.props.onChange(value);
    }
    render(){
        return <select name="" id="" onChange={this.onChange} ref='select'>
                    <option value="reactjs">reactjs</option>
                     <option value="frontend">frontend</option>
                </select>
    }
}