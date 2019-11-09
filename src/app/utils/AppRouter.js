import React, { Component } from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import Home from '../components/home';
import Dashboard from '../components/dashboard/dashboard';

class AppRouter extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}  />
                <Route exact path="/dashboard" component={Dashboard}  />
            </Switch>
        );

    }

}

export default AppRouter;