import React from 'react'

export default function RequestCard() {
    return (
        <div className="w-72 h-auto  rounded-lg bg-gray-100 p-5 flex flex-col">
                    <div className="flex justify-between">
                        <p className="font-Rubik_Regular bg-green-300 p-1 text-green-500 text-xs rounded">Financial Service</p>
                    </div>
                    <p className="text-lg font-Rubik-Bold font-bold mt-2">John Knox's Finance Group</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">112 Riverview Lane, Bronx, 11435.</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">New York</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">+1 (902) 562 3772</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">childcaresupport@gmail.com</p>

                    <div className="flex w-full justify-between mt-5">
                        <button className="bg-green-500 text-xs flex-1 p-1 mx-2 text-white rounded">Approve</button>
                        <button className="bg-white text-xs flex-1 p-1 mx-2 text-green-500 border-2 border-green-500 rounded">Decline</button>
                    </div>
        </div>
    )
}
