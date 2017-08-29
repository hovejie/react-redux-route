import React from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';

//����·��
render(
    <Router history={hashHistory}>
        <Route path="/" component = {Hello} />
        <Route path="/repo/:user/:age" component = {Repo} />
        <Route path="/about" component = {Starts} />
    </Router>,document.body
);