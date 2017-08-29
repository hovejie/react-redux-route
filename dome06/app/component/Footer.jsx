/**
 * Created by xdata on 8/18.
 */
import React, { Component } from 'react';
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
            return <a href="javascript:void (0)" key ={i} onClick={()=>this.props.show(date)}>{date}</a>;
        });
        return <div>
                    <p>
                        show:
                        {list}
                    </p>
                </div>
    }
}