import React, { Component } from 'react';
import Content from './content.jsx';
export default  class Redux extends Component{
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        (async()=>{
            await this.props.getContent('frontend');
        })();
    }
    render(){
        return (
            <div>
                <Content reactjs={this.props.reactjs} title={'frontend'}/>
            </div>
        )
    }
}