import React from 'react'
import Help from '../../../assets/icons/Help'
import ListingCard from '../Components/ListingCard'
import StatCard from '../Components/StatCard'

export default function Dasboard() {
    return (
        <div className="w-full h-full rounded bg-white pt-10 px-5">
            <h1 className="font-Rubik_Medium text-lg">Dashboard</h1>
            <p className="text-sm font-Rubik-Regular">Here's a quick preview of what's happening</p>

            <div className="activities w-full grid grid-cols-3 gap-3 mt-4">

                <StatCard header="Registered Businesses" count={30764} />

                <StatCard header="Request Recieved" count={700} />

                <StatCard header="Approved Request" count={900} />
                

            </div>

            <div className="header flex justify-between mt-5 pr-10">
                <h1 className="text-sm font-Rubik_Regular ml-1 mt-2">Recently Added</h1>
                <button className="bg-green-700 rounded p-2 text-xs text-white">View more</button>
            </div>


            <div className="recent grid grid-cols-3 gap-2 mt-5">

                <ListingCard />

                <ListingCard />

                <ListingCard />

            </div>

        </div>
    )
}
