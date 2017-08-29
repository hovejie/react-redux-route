import React, { Component } from 'react';
import AddTodo from './component/AddTodo.jsx';
import TodoList from './component/TodoList.jsx';
import { connect } from 'react-redux';
import {start,end, select, refresh, fetchPostsIfNeeded} from './action/action';
  class App extends Component{
    componentDidMount(){
      this.props.fetchPostsIfNeeded(this.props.show);
    }
    componentWillReceiveProps(next) {
      if(next.show !== this.props.show){
          this.props.fetchPostsIfNeeded(next.show);
      }

    }
    refresh() {
        this.props.refresh(this.props.show);
        this.props.fetchPostsIfNeeded(this.props.show);
    }
    render(){
        let off = this.props.items.length === 0 ;
        return (
            <div className='wrap'>
                <AddTodo onChange={this.props.select}></AddTodo>
                <p>
                    <span>last undate at {new Date(this.props.time).toLocaleTimeString()}</span>
                    <button onClick={this.refresh.bind(this)}>refresh</button>
                </p>
                <div>
                    {off ? (<h2>loading ...</h2>) :
                        <TodoList posts={this.props.items}></TodoList>
                    }
                </div>
            </div>
        )
    }
}

// ui
let mapStateToProps = (state)=>{
    let items = state.todes.didInvalidate ? [] : state.todes.items;
    return {
        show: state.show,
        items,
        isFetching: state.todes.isFetching,
        time: state.todes.time
    }
};
//容器
let mapDispatchToProps = (dispatch)=>{
    return {
        start: (reddit)=> dispatch(start(reddit)),
        end: (reddit, json)=> dispatch(end(reddit, json)),
        select: (reddit)=> dispatch(select(reddit)),
        refresh: (reddit)=> dispatch(start(reddit)),
        fetchPostsIfNeeded: (reddit)=>{dispatch(fetchPostsIfNeeded(reddit))}
    }
};
// 连接ui组件与容器组件
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);