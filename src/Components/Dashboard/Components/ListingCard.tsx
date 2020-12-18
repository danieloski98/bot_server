import React from 'react'

export default function ListingCard() {
    return (
        <div className="w-72 h-56 rounded-lg bg-gray-100 p-5 flex flex-col">
                    <div className="flex justify-between">
                        <p className="font-Rubik_Regular bg-green-300 p-1 text-green-700 text-xs rounded">Financial Service</p>
                    </div>
                    <p className="text-lg font-Rubik-Bold font-bold mt-2">John Knox's Finance Group</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">112 Riverview Lane, Bronx, 11435.</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">New York</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">+1 (902) 562 3772</p>

                    <p className="mt-2 font-Rubik-Regular text-sm">childcaresupport@gmail.com</p>
        </div>
    )
}
