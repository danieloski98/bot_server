import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// pages
import Home from '../Pages/Home'
import ForgotPassword from '../Pages/ForgotPassword'
import ResetPassword from '../Pages/ResetPassword'
import Dashboard from '../Pages/Dashboard'

export default function Authentication() {
    return (
        <div>
            <Route path="/" exact render={() => <Redirect to="/login" />} />
            <Route path="/login" component={Home} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/resetpassword" component={ResetPassword} />
            <Route path="/dashboard" component={Dashboard} />
        </div>
    )
}
