import React, { Component } from 'react';
import Content from './content.jsx';

export default class ALL extends Component{
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        (async()=>{
            await this.props.getContent('reactjs');
            $(' #wap').css({
                opacity: '0.1'
            });
            if (this.props.reactjs.content.length>0 ) {
                $(' #wap').css({
                    opacity: '1'
                });
            }
        })();
    }
    render(){
        return (
            <div id='wap'>
                <Content reactjs={this.props.reactjs} title={'react'}/>
            </div>
        )
    }
}