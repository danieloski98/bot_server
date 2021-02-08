import React from 'react'

// icons
import Services from '../../../assets/icons/Services'
import Dashboard from '../../../assets/icons/Dashboard'
import Messenger from '../../../assets/icons/Messanger'
import Location from '../../../assets/icons/Location'
import Business from '../../../assets/icons/Business'
import Request from '../../../assets/icons/Request'
import Settings from '../../../assets/icons/Settings'

import { useHistory, useLocation } from 'react-router-dom'

// classnames
const Active = "flex h-10 items-center px-2 bg-green-500 hover:bg-green-400 rounded mb-4 cursor-pointer text-white ml-3"
const InActive = "flex h-10 items-center px-2 rounded mb-4 cursor-pointer hover:bg-green-400 text-black ml-3"

export default function Sidebar() {
    const [loc, setLoc] = React.useState('/dashboard');

    const history = useHistory();
    const location = useLocation();

    React.useEffect(() => {
        console.log(loc);
    }, [loc]);
    
    const changeLocation = (location: string) => {
        history.push(`/dashboard/${location}`);
        setLoc(`/dashboard/${location}`)
    }

    return (
        <div className="w-full h-full">

            <div 
                onClick={() => changeLocation('')} 
                className={loc === "/dashboard/" || loc === '/dashboard' ? Active : InActive }>
                <Dashboard color={loc === "/dashboard/" || loc === '/dashboard' ? "white": "#3E5351"} />
                <p className=" text-xs font-Rubik_Regular ml-4">Dashboard</p>
            </div>

            <div 
                onClick={() => changeLocation('listings')}  
                className={loc === "/dashboard/listings" ? Active : InActive }>
                <Business color={loc === "/dashboard/listings" ? "white": "#3E5351"} />
                <p className="text-xs font-Rubik_Regular ml-4">Business Listings</p>
            </div>

            <h1 className="text-green-600 font-Rubik_Regular text-sm ml-2 mb-4">BOT MEMORY</h1>

            <div onClick={() => changeLocation('states')}  className={loc === "/dashboard/states" ? Active : InActive }>
                <Location color={loc === "/dashboard/states" ? "white": "#3E5351"} />
                <p className=" text-xs font-Rubik_Regular ml-4">States</p>
            </div>

            {/* <div 
                onClick={() => changeLocation('zipcode')} 
                className={loc === "/dashboard/zipcode" ? Active : InActive }>
                <Location color={loc === "/dashboard/zipcode" ? "white": "#3E5351"} />
                <p className=" text-xs font-Rubik_Regular ml-4">Zip Codes</p>
            </div> */}

            <div 
                onClick={() => changeLocation('services')} 
                className={loc === "/dashboard/services" ? Active : InActive }>
                    <Services color={loc === "/dashboard/services" ? "white": "#3E5351"} />
                    <p className="text-xs font-Rubik_Regular ml-4">Service Types</p>
            </div>

            <h1 className="text-green-600 font-Rubik_Regular text-sm ml-2 mb-2">INTEGRATIONS</h1>

            <div className="flex h-10 items-center px-2  rounded mb-2 ml-3">
                <Messenger />
                <a href="https://m.me/singlemomnetwork" rel="noreferrer" target="_blank" className="text-gray-800 text-xs font-Rubik_Regular ml-4">Messenger</a>
            </div>

            <h1 className="text-green-600 font-Rubik_Regular text-sm ml-2 mb-2">MANAGEMENT</h1>

            <div 
                onClick={() => changeLocation('requests')} 
                className={loc === "/dashboard/requests" ? Active : InActive }>
                    <Request color={loc === "/dashboard/requests" ? "white": "#3E5351"} />
                    <p className=" text-xs font-Rubik_Regular ml-4">Requests</p>
            </div>

            <div 
                onClick={() => changeLocation('settings')} 
                className={location.pathname === "/dashboard/settings" ? Active : InActive }>
                    <Settings color={loc === "/dashboard/settings" ? "white": "#3E5351"} />
                    <p className=" text-xs font-Rubik_Regular ml-4">Settings</p>
            </div>

        </div>
    )
}
