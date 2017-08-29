import React,{Component} from 'react';
import Calc from './component/calc.jsx';
class APP extends Component{
    render(){
        return <Calc value={this.props.value} add={this.props.add} delete={this.props.delete}></Calc>
    }
}
export default APP;
/*
import React, { Component } from 'react';

const counter = (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
}

class APP extends Component {
    state = counter(undefined, {});

    dispatch(action) {
        this.setState(prevState => counter(prevState, action));
    }

    increment = () => {
        this.dispatch({ type: 'INCREMENT' });
    };

    decrement = () => {
        this.dispatch({ type: 'DECREMENT' });
    };

    render() {
        return (
            <div>
                {this.state.value}
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
export default APP;
    */