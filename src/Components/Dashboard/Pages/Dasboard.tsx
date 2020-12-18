import React from 'react'
import Help from '../../../assets/icons/Help'

export default function Dasboard() {
    return (
        <div className="w-full h-full rounded bg-white pt-10 px-5">
            <h1 className="font-Rubik_Medium text-lg">Dashboard</h1>
            <p className="text-sm font-Rubik-Regular">Here's a quick preview of what's happening</p>

            <div className="activities w-full grid grid-cols-3 gap-3 mt-4">

                <div className="w-72 h-24 rounded-lg bg-gray-100 p-5 flex flex-col">
                    <div className="flex justify-between">
                        <p className="font-Rubik_Regular text-sm">Registered Businesses</p>
                        <Help />
                    </div>
                    <p className="text-lg font-Rubik-Bold font-bold mt-3">30,938</p>
                </div>

                <div className="w-72 h-24 rounded-lg bg-gray-100 p-5 flex flex-col">
                    <div className="flex justify-between">
                        <p className="font-Rubik_Regular text-sm">Requests Received</p>
                        <Help />
                    </div>
                    <p className="text-lg font-Rubik-Bold font-bold mt-3">700</p>
                </div>

                <div className="w-72 h-24 rounded-lg bg-gray-100 p-5 flex flex-col">
                    <div className="flex justify-between">
                        <p className="font-Rubik_Regular text-sm">Approved Requests</p>
                        <Help />
                    </div>
                    <p className="text-lg font-Rubik-Bold font-bold mt-3">900</p>
                </div>
                

            </div>

            <div className="header flex justify-between mt-5 pr-10">
                <h1 className="text-sm font-Rubik_Regular ml-1 mt-2">Recently Added</h1>
                <button className="bg-green-700 rounded p-2 text-xs text-white">View more</button>
            </div>


            <div className="recent grid grid-cols-3 gap-2 mt-5">

                <div className="w-72 h-56 rounded-lg bg-gray-100 p-5 flex flex-col">
                    <div className="flex justify-between">
                        <p className="font-Rubik_Regular bg-green-300 p-1 text-green-700 text-xs rounded">Approved Requests</p>
                    </div>
                    <p className="text-lg font-Rubik-Bold font-bold mt-2">John Knox's Finance Group</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">112 Riverview Lane, Bronx, 11435.</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">New York</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">+1 (902) 562 3772</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">childcaresupport@gmail.com</p>
                </div>

                <div className="w-72 h-56 rounded-lg bg-gray-100 p-5 flex flex-col">
                    <div className="flex justify-between">
                        <p className="font-Rubik_Regular bg-green-300 p-1 text-green-700 text-xs rounded">Approved Requests</p>
                    </div>
                    <p className="text-lg font-Rubik-Bold font-bold mt-2">John Knox's Finance Group</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">112 Riverview Lane, Bronx, 11435.</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">New York</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">+1 (902) 562 3772</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">childcaresupport@gmail.com</p>
                </div>

                <div className="w-72 h-56 rounded-lg bg-gray-100 p-5 flex flex-col">
                    <div className="flex justify-between">
                        <p className="font-Rubik_Regular bg-green-300 p-1 text-green-700 text-xs rounded">Approved Requests</p>
                    </div>
                    <p className="text-lg font-Rubik-Bold font-bold mt-2">John Knox's Finance Group</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">112 Riverview Lane, Bronx, 11435.</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">New York</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">+1 (902) 562 3772</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">childcaresupport@gmail.com</p>
                </div>

            </div>

        </div>
    )
}
