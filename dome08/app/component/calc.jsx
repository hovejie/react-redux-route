import React, { Component } from 'react';

class Calc extends Component{
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.delete = this. delete.bind(this);
    }
    add() {

    }
    delete(){

    }
    render(){
        return <div>
            <h1>{this.props.value}</h1>
            <button onClick={this.props.add}>+</button>
            <button onClick={this.props.delete}>-</button>
        </div>
    }
}
export default Calc;