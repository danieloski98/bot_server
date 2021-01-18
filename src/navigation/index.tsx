import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import AdminProvider from '../Contexts/AdminDetailsContext';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

// routes
import AuthenticationRoutes from './Authentication';

export default function index() {
    const queryClient = new QueryClient();

    return (
       <QueryClientProvider client={queryClient}>
           <ReactQueryDevtools initialIsOpen={false} />
            <AdminProvider>
                <Router>
                    <Switch>
                        <AuthenticationRoutes />
                    </Switch>
                </Router>
            </AdminProvider>
       </QueryClientProvider>
    )
}
