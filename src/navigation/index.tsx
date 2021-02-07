import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import AdminProvider from '../Contexts/AdminDetailsContext';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import PC from '../assets/images/laptop.svg';

// routes
import AuthenticationRoutes from './Authentication';

export default function Index() {
    const queryClient = new QueryClient();
    const [width, setWidth] = React.useState(window.window.innerWidth);
    
    const SmallScreen = () => {
        return (
            <div className="fw-full h-screen flex flex-col justify-center items-center">
                <img src={PC} width="200" alt=""/>
                <p className="font-Rubik_Bold text-xl mt-4">Please view this page using a Pc</p>
            </div>
        )
    }

    React.useEffect(() => {
        setWidth(window.innerWidth);
    }, [width])
   if (width < 1024) {
       return <SmallScreen />
   }else {
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
}
