import React,{Component} from 'react';
import {render} from 'react-dom';
import Calc from './component/calc.jsx';
import store from './route/store';
let run = ()=>{
    render(
        <Calc value={store.getState()}></Calc>,
        document.getElementById('APP')
    );
};
run();
store.subscribe(run);
// export default App;