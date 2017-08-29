import React, { Component } from 'react';
import run from '../route/action';
class Calc extends Component{
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.delete = this. delete.bind(this);
    }
    add() {
        run.onIncrement();
    }
    delete(){
        run.onDecrement();
    }
    render(){
        return <div>
            <h1>{this.props.value}</h1>
            <button onClick={this.add}>+</button>
            <button onClick={this.delete}>-</button>
        </div>
    }
}
export default Calc;