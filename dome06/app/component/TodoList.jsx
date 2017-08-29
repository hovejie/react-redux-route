/**
 * Created by xdata on 8/18.
 */
import React, { Component } from 'react';

export default  class TodoList extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        let list = this.props.posts.map((date, index)=>{
            return <li key={index}>{date.title}</li>
        });
        return  (
            <div>
                <ul>{list}</ul>
            </div>
        )

    }
}