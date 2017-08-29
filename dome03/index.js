/**
 * Created by xdata on 8/16.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux';
import APP from './app/APP';
import store from './app/store/store';
import action from './app/action/action';
function mapStateToProps(state) {
    return state;

}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        add: () => dispatch(action.onIncrement()),
        delete: () => dispatch(action.onDecrement())
    }
}

// Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(APP);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('APP')
);

