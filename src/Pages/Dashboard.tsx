import React from 'react'
import Navbar from '../Components/Dashboard/Components/Navbar'
import { Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import NetworkActivity from '../Components/Dashboard/Components/NetworkActivity';
import useDetails from '../Hooks/useAdminDetails';

// icons
import GreenLogo from '../assets/icons/Greenlogo'
import Sidebar from '../Components/Dashboard/Components/Sidebar'

// components
import DashboardPage from '../Components/Dashboard/Pages/Dasboard'
import ListingPage from '../Components/Dashboard/Pages/Listings'
import RequestPage from '../Components/Dashboard/Pages/Request'
import SettingsPage from '../Components/Dashboard/Pages/Settings'
import StatesPage from '../Components/Dashboard/Pages/States'
import ZipCodes from '../Components/Dashboard/Pages/ZipCode'
import ServiceType from '../Components/Dashboard/Pages/ServiceType'
import Search from '../Components/Dashboard/Pages/SearchResult'


export default function Dashboard() {
    const history = useHistory();
    const {setEmail, setId, setToken, setFirstname, setLastname, setRole, id} = useDetails();

    React.useEffect(() => {
        // check the sessionStorage
      const localId = sessionStorage.getItem('id');
      // check the context
      const contextId = id;
        
      // check if the id is null or undefined
      if (contextId === null || contextId === undefined || contextId === '') {
        console.log(localId);
          // check sessionStorage
          if (localId === null || localId === undefined) {
                history.push('/login');
          }else {
              setId(sessionStorage.getItem('id'));
              setEmail(sessionStorage.getItem('email'));
              setToken(sessionStorage.getItem('token'));
              setFirstname(sessionStorage.getItem('firstname'));
              setLastname(sessionStorage.getItem('lastname'));
              setRole(parseInt(sessionStorage.getItem('role')))
          }
      }
    })

    return (
        <div className="w-screen h-screen flex">
            <section className="w-64 h-full bg-white shadow-xl z-30 flex flex-col">
                <section className="flex-1 flex flex-col">

                   <div className="w-full h-20 flex justify-center items-center">
                        <GreenLogo />
                   </div>

                   <div className="flex-1 pl-4 pr-4">
                       <Sidebar />
                   </div>

                </section>
                <section 
                onClick={() => history.push('/login')}
                className="w-full h-12 bg-gray-200 hover:bg-green-400 hover:text-white font-Rubik_Regular flex justify-center items-center cursor-pointer">
                    <h1 className="">LOG OUT</h1>
                </section>
            </section>

            <section className="flex-1 bg-gray-100 flex flex-col overflow-hidden">
                <div className="w-full h-20 s z-20">
                    <Navbar />
                </div>

                <div className="flex-1 flex z-0 items-center justify-center p-8 overflow-y-scroll">
                    <div className="w-full h-full">
                        <Switch>
                            <Route path="/dashboard/" exact component={DashboardPage} />
                            <Route path="/dashboard/listings" exact component={ListingPage} />
                            <Route path="/dashboard/requests" exact component={RequestPage} />
                            <Route path="/dashboard/settings" component={SettingsPage} />
                            <Route path="/dashboard/states" component={StatesPage} />
                            {/* <Route path="/dashboard/zipcode" component={ZipCodes} /> */}
                            <Route path="/dashboard/services" component={ServiceType} />
                            <Route path="/dashboard/search" component={Search} />
                        </Switch>
                    </div>
                </div>
            </section>
        </div>
    )
}
