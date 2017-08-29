/**
 * Created by xdata on 8/28.
 */

import React, { Component } from 'react';
import {Link} from 'react-router';
import  action  from '../redux/action/action';

class NavList extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        // let syncs = this.props.location.pathname == "/Redux" ? 'frontend' : 'reactjs';
        return (
                <div name="" id="" >
                    <Link to='/All' className='btn btn-success' >react</Link>
                    <Link to='/Redux' className='btn btn-success' style={{margin: '15px'}}>redux</Link>
                </div>
        )
    }
}
export default NavList;