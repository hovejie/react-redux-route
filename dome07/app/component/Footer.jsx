/**
 * Created by xdata on 8/18.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';
export default class Footer extends Component{
    constructor(props){
        super(props)
        this.renderFilter = this.renderFilter.bind(this);
    }
    renderFilter() {

    }
    render(){
        let filter = ['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE'];
        let list = filter.map((date, i)=>{
            if (date == this.props.filter) {
                return date;
            }
            return <Link to="/active" style={{margin: '10px', color: 'blue'}} key ={i} onClick={()=>this.props.show(date)}>{date}</Link>;
        });
        return <div>
                     show:
                    <p style={{color: 'red'}}>

                        {list}
                    </p>
                </div>
    }
}