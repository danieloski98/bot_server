import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom';

// routes
import AuthenticationRoutes from './Authentication';

export default function index() {
    return (
        <Router>
            <Switch>
                <AuthenticationRoutes />
            </Switch>
        </Router>
    )
}
