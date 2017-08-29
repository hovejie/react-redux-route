import React, { Component } from 'react';
class Content extends Component {
    render(){
        console.log(this.props);
        debugger;
        return <li className="list-group-item">{this.props.title}</li>
    }
}
export default Content;