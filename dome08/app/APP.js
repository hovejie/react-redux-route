import React,{Component} from 'react';
import { connect } from 'react-redux';
import Calc from './component/calc.jsx';
import {onIncrement, onDecrement} from './router/action';
class APP extends Component{
    render(){
        return <Calc value={this.props.state} add={this.props.add} delete={this.props.delete}></Calc>
    }
}
function mapStateToProps(state) {
    return {
        state: state.reducer
    };

}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        add: () => dispatch(onIncrement()),
        delete: () => dispatch(onDecrement())
    }
}

// Connected Component

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(APP);