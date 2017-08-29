import React, { Component } from 'react';
import NavList from './component/Nav.jsx';

 class App extends Component{
    render(){
        return (
            <div className='wrap'>
                <div>
                    <NavList history={this.props.history} location={this.props.location}/>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default App;
