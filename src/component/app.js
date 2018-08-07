import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './signin/signin';
import Dashboard from './dashboard/dashboard';

export default class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Signin} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        );
    }
}