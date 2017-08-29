import React, { Component } from 'react';
class Content extends Component {
    componentWillMount(){
    }
    render(){
        let list = this.props.reactjs.content.map((tode, index)=>{
            return <li key={index} className="list-group-item">{tode.title}</li>
        });
        return <div style={{margin: '50px', border: '1px solid #c9c9c9'}}>
                    <ul className="list-group"  style={{ opacity: this.props.reactjs.didInvalidate ? 1 : 0.5 }}>
                        <h1 className="page-header">
                            {this.props.title}
                        </h1>
                        <h5>刷新时间{new Date(this.props.reactjs.time).toLocaleTimeString()}</h5>
                        {list}
                    </ul>
                </div>
    }
}
export default Content;